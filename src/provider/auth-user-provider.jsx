import React, { createContext, useState, useEffect } from 'react'
import { useFirebase } from '../firebase'

export const AuthContext = createContext({ user: null, ready: false });

export const AuthContextProvider = ({ children }) => {
    const [state, setState] = useState({ user: null, ready: false });
    const { auth } = useFirebase();

    useEffect(() => {
        if (auth){
            auth.onAuthStateChanged((user) => {
                if (user)
                    setState({user, ready: true});
                else
                    setState({user: null, ready: true});
            });
        }
    }, [auth])

    return (<AuthContext.Provider value={{ ...state }}>
        {children}
    </AuthContext.Provider>)
};