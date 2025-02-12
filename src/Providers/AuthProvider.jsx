import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiousPublic from "../Hooks/useAxiousPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiousPublic();


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
            if(currentUser){
                //assign get token
                const userInfo= {email:currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('Access Token', res.data.token)
                    }
                })

            }
            else{
                //do something
                localStorage.removeItem('access-token');
            }
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