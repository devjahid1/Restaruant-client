import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser  = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn  = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }



   const unsubscribe =  useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)  
        })
        return () =>{
            return unsubscribe
        }
       },[])


    const authInfo = {
        user,
        updateUserProfile,
        googleSignIn,
        createUser,
        signIn,
        logOut,
        loading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;