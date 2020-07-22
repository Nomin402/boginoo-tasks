import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import firebase from 'firebase'
import { useFirebase } from '../firebase';


export const Shortener = () => {
    const location = useLocation()
    const {firestore} = useFirebase();

    useEffect(()=>{
        if (firestore) {
            firestore.collection('shortener').doc(location.pathname.slice(1)).get().then((doc) => {
                window.location.href = doc.data().long;
            })
        }
    },[firestore]);

    console.log(location.pathname);

    return (<></>)
};

