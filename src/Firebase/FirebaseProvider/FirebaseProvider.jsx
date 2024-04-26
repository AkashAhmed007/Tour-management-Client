import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import PropTypes from 'prop-types';
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
const [user,setUser] = useState(null)

//Create users 
const createUser =(email,password,userName,photoURL)=>{
        return createUserWithEmailAndPassword(auth, email, password,userName,photoURL)
     }
//Sign in users    
const signInUser = (email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }   
//google login
const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
}

//logout
const logOut = ()=>{
    signOut(auth); 
    setUser(null)    
 }


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
      });
      return ()=> unsubscribe()
},[])


const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        logOut
     }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.object
}
export default FirebaseProvider;