import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { useFirebase } from '../firebase'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { AuthContext } from '../provider/auth-user-provider';

export const HomeDefault = () => {
    const location = useLocation()
    const { user } = useContext(AuthContext);
    const [url, setUrl] = useState('')
    const { firestore } = useFirebase();
    const [short, setShort] = useState('');

    const history = useHistory()

    const generateNewUrl = async () => {
        const random = Math.random().toString(36).substring(7)
        console.log(random)

        const sl = await firestore.collection("shortener").doc(random).set({
            short: window.location.origin + '/' + random,
            long: url
        })

        console.log(user);
        if (user) {
            await firestore.collection("users").doc(user.uid).collection("shortener").add({
                short: window.location.origin + '/' + random,
                long: url
            })
        }
        setShort(window.location.origin + '/' + random);
    }

    return (

        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
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
                    {short &&
                        <div>
                            <div className="mt-6">
                                <div className="font-ubuntu fs-16 lh-18 word ">Өгөгдсөн холбоос:</div>
                                <div className="font-ubuntu fs-20 lh-23">{url}</div>
                            </div>
                            <div className='mt-5'>
                                <div className="fonr-ubuntu fs-16 lh-18 word"> Богино холбоос:</div>
                                <div className="flex-row items-align font-ubuntu fs-20 lh-23">{short} <div className="fs-12 font-ubuntu c-primary underline btn ml-4">Хуулж авах</div></div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </Layout>
    )
}