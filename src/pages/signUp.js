import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useEffect} from'react'
import firebase from 'firebase';
import {useFirebase} from '../firebase';

export const SignUp = () => {
    
    const history = useHistory()
    const {app, firestore, auth} = useFirebase(firebase)
    
    const [user, setUser] = useState();
    const [state, setState] = useState({name: '', email: '', password: ''});
    const [name, setName] = useState('')

    useEffect(() => {
        const subsribe = firebase.auth(app).onAuthStateChanged((user) => {
            if (user) {
                history.push('/');
            }
        })

        return () => subsribe();
    }, [])

    const signUp = async () => {
        console.log(state);
        let uid = await firebase.auth(app).createUserWithEmailAndPassword(state.email, state.password).then((auth) => auth.user.uid);
        console.log(uid)
        let haha = await firebase.firestore().collection('users').doc(uid).set({
            displayName: state.name,
            email: state.email
        })

    }

    useEffect(() => {
        if (user) {
            firebase.firestore().collection('users').doc(user.uid).onSnapshot((d) => {
                setName(d.data().displayName)
            })
        }
    }, [user])

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-30 lh-32  mt-4'>
                    Boginoo
                </div>
                <div className='font-ubuntu c-primary fs-20 lh-23 text-center mt-4 bold'>Бүртгүүлэх</div>
                <div className="mt-4">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Нэр</div>
                    <Input placeholder='Khan' className='input h-5 w-8 mt-2 ph-4' value={state.name} onChange={(e) => setState({...state, name: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Цахим хаяг</div>
                    <Input placeholder='name@mail.domain' className='input h-5 w-8 mt-2 ph-4' value={state.email} onChange={(e) => setState({...state, email: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Нууц үг</div>
                    <Input type='password' placeholder='password'  className='input h-5 w-8 mt-2 ph-4' value={state.password} onChange={(e) => setState({...state, password: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Нууц үгээ давтна уу?</div>
                    <Input type='password' placeholder='password'  className='input h-5 w-8 mt-2 ph-4'/>
                </div>

                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 b-primary mt-4 w-8' onClick={signUp}>Бүртгүүлэх</Button>     
                    
            </div>
        </Layout>
    )
}