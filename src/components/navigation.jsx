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

    console.log(user)

    useEffect(() => {
        if (firestore && user){
            firestore.collection('users').doc(user.uid).get().then((doc) => setDisplayName(doc.data().displayName))
        }
    }, [user, firestore])

    return (<>
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {location.pathname === '/' &&
            <Button className='font-ubuntu fs-20 lh-23 bold c-default ph-4 ml-4 b-primary' onClick={toLogin} id='test'>Нэвтрэх</Button>}
            <div>{user ? displayName : ''}</div>
        </div>
    </>);
};