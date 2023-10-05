import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]) 
    const [news, setNews] = useState([]) 
    const [loading, setLoading] = useState(true)    


    useEffect(()=> {
        fetch('news.json')
      .then(res => res.json())
      .then(data => setNews(data)) 
    },[])   
    
console.log(user);

    const handleRegister = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }; 

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }; 

    const googleSineIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
       const unScribe = onAuthStateChanged(auth, current => {
            setUser(current)
           setLoading(false)
        })
        return ()=> {
            unScribe()
        }
    }, [])



    const authInfo = {
        handleRegister,
        login, 
        user, 
        googleSineIn, 
        logOut, 
        loading, 
        news
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;