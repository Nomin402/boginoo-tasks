import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import {useEffect} from'react'
import firebase from 'firebase';
import app from '../firebase';

export const Login = () => {
    
    const history = useHistory()

    const toHome = () => {
        history.push('/')
    }
    
    const [user, setUser] = useState();
    const [state, setState] = useState({email: '', password: ''});

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
        await firebase.auth(app).createUserWithEmailAndPassword(state.email, state.qpassword);
    }

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
                <div className='font-ubuntu c-primary fs-20 lh-23 text-center mt-4 bold'>Нэвтрэх</div>
                <div className="mt-4">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Цахим хаяг</div>
                    <Input placeholder='name@mail.domain' className='input h-5 w-8 mt-2 ph-4' value={state.email} onChange={(e) => setState({...state, email: e.target.value})}/>
                </div>
                <div className="mt-4">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Нууц үг</div>
                    <Input type='password' placeholder='password'  className='input h-5 w-8 mt-2 ph-4' value={state.password} onChange={(e) => setState({...state, password: e.target.value})}/>
                </div>
                <div className="w-8 flex justify-between mt-4">
                    <div className='font-ubuntu fs-12 c-primary'>Намайг сана</div>
                    <div className="font-ubuntu fs-12 underline">Нууц үгээ мартсан</div>
                </div>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 b-primary mt-4 w-8 ' onClick={signUp}>Sign Up</Button>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 b-primary mt-4 w-8 ' onClick={toHome}>Нэвтрэх</Button>
                <div className="fs-12 font-ubuntu c-primary mt-4 underline">Шинэ хэрэглэгч бол энд дарна уу</div>
                
                    
            </div>
        </Layout>
    )
}