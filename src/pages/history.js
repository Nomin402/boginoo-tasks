import React, { useEffect, useContext, useState } from 'react'
import { useFirebase } from '../firebase'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { AuthContext } from '../provider/auth-user-provider'

export const History = () => {
    const {user} = useContext(AuthContext);
    const { firestore } = useFirebase();
    const [history, setHistory] =useState([]);
    const [url, setUrl] = useState()

    useEffect(() => {
        if (user && firestore) {
            const unsubscribe = firestore.collection('users').doc(user.uid).collection('shortener').onSnapshot((q) => {
                setHistory(q.docs.map((doc) => doc.data()));
            })
            return () => unsubscribe()
        }
    }, [user, firestore])

    const generateNewUrl = async () => {
        const random = Math.random().toString(36).substring(7)
        console.log(random)

        await firestore.collection("shortener").doc(random).set({
            short: window.location.origin + '/' + random,
            long: url
        })

        if (user) {
            await firestore.collection("users").doc(user.uid).collection("shortener").add({
                short: window.location.origin + '/' + random,
                long: url
            })
        }
    }

    return (

        <Layout>
            <div className='flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 text-center'>
                    Boginoo
            </div>

                <div>
                    <div className='mt-5 flex justify-center items-center'>
                        <Input placeholder='https://www.web-huudas.mn' className='input h-5 w-9' onChange={(value) => setUrl(value.target.value)} value={url} />
                        <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={generateNewUrl}>Богиносгох</Button>
                    </div>
                    <div className="font-ubuntu fs-32 lh-37 c-primary mt-4">Түүх</div>

                    {
                    history.map(({short, long}) => <>
                        <div className="flex-row">
                            <div className=" w-9 mt-4">
                                <div className="font-ubuntu fs-12 lh-16 word">Өгөгдсөн холбоос:</div>
                                <div className="font-ubuntu mt-2">{long}</div>
                            </div>
                            <div className='mt-4'>
                                <div className="font-ubuntu fs-12 lh-16 word"> Богино холбоос:</div>
                                <div className="flex-row items-align font-ubuntu mt-2">{short} <div className="fs-12 font-ubuntu c-primary underline btn ml-4">Хуулж авах</div></div>
                            </div>
                        </div>
                        <div className='line mt-4'></div>
                        </>)
                    }
                </div>
            </div>
        
        </Layout>
    )
}
