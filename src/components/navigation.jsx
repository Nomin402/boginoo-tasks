import React from 'react';
import { Button } from './';
import {useHistory} from "react-router-dom"
import {useLocation} from 'react-router-dom'

export const Navigation = ({user}) => {
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */

    let history = useHistory()

    let location = useLocation();
    
    const toLogin = () => {
        history.push('/login')
    }

    // console.log(user)

    return (<>
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {location.pathname === '/' &&
            <Button className='font-ubuntu fs-20 lh-23 bold c-default ph-4 ml-4 b-primary' onClick={toLogin} id='test'>Нэвтрэх</Button>}
            <div>{user ? user.uid.displayName : ''}</div>
        </div>
    </>);
};