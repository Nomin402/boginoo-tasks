import firebase from 'firebase';
import {useState, useEffect} from 'react'

var config = {
    apiKey: "AIzaSyAmiJZnf4nf7SVoXj2kuEpR3453thF8ksk",
    authDomain: "boginoo-402.firebaseapp.com",
    databaseURL: "https://boginoo-402.firebaseio.com",
    projectId: "boginoo-402",
    storageBucket: "boginoo-402.appspot.com",
    messagingSenderId: "502717388325",
    appId: "1:502717388325:web:db9ed7a85ea436cdbf51cc",
    measurementId: "G-Q21J567PH7"
};

export const useFirebase = () => {
    let [state, setState] = useState({firebase})

    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            app = firebase.initializeApp(config)
        }
        let firestore = firebase.firestore(app)
        let auth = firebase.auth(app)
        setState({firebase, auth, app, firestore})
    }, [])
    return state;
}