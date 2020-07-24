import React, { useContext, useEffect, useState } from 'react';
import { Button } from './';
import {useHistory} from "react-router-dom"
import {useLocation} from 'react-router-dom'
import {AuthContext} from '../provider/auth-user-provider'
import { useFirebase } from '../firebase';

export const Navigation = () => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */
    const {firestore} = useFirebase();
    const {user} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');

    let history = useHistory()

    let location = useLocation();
    
    const toLogin = () => {
        history.push('/login')
    }

    const toHistory = () => {
        history.push('/history')
    }

    console.log(user)

    useEffect(() => {
        if (firestore && user){
            firestore.collection('users').doc(user.uid).get().then((doc) => setDisplayName(doc.data().displayName))
        }
    }, [user, firestore])

    return (<>
        <div className='w100 flex justify-end items-center pa-4'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {(location.pathname === '/' && !user) &&
            <Button className='font-ubuntu fs-20 lh-23 bold c-default ph-4 ml-4 b-primary' onClick={toLogin} id='test'>Нэвтрэх</Button>}
            <div className="flex-row items-align">
                <div className='ml-5 fs-20 lh-23 font-ubuntu bold'>{user ? displayName : '' }</div>
                <div className="ml-4 btn" onClick={toHistory}>
                    <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L10.5 10.5L19 2" stroke="#02B589" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </>);
};