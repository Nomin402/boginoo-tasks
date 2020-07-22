import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { useFirebase } from '../firebase'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    const location = useLocation()
    const [url, setUrl] = useState('')
    const { firestore } = useFirebase();
    const [short, setShort] = useState('');

    const history = useHistory()

    const toshortener = () => {
        // history.push('shortener')
    }

    const generateNewUrl = async () => {

        const random = Math.random().toString(36).substring(7)
        console.log(random)

        const sl = await firestore.collection("shortener").doc(random).set({
            short: window.location.origin + '/' + random,
            long: url

        })

        setShort(window.location.origin + '/' + random);
    }

    // const lel = firestore.collection('shortener').doc(url).get().then((e) => console.log(e.id))

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
                <div className='mt-5 flex justify-center items-center'>
                    <Input placeholder='https://www.web-huudas.mn' className='input h-5 w-8' onChange={(value) => setUrl(value.target.value)} value={url} />
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={generateNewUrl}>Богиносгох</Button>
                </div>
                {short &&
                    <>
                        <div className="ubuntu fs-16 lh-16 word">Өгөгдсөн холбоос:</div>
                        <div>{url}</div>
                        <div className="ubuntu fs-16 lh-16 word">Өгөгдсөн холбоос:</div>
                        <div>{short}</div>
                    </>
                }
            </div>

        </Layout>
    )
}