import React, {useEffect, useState} from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import firebase from 'firebase';
import app from '../firebase';

export const HomeDefault = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subsribe = firebase.auth(app).onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
        })

        return () => subsribe();
    }, [])

    return (
        
        <Layout user={user}>
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
                    <Input placeholder='https://www.web-huudas.mn' className='input h-5 w-8'/>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}