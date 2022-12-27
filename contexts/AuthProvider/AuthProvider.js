import React, { createContext, useEffect, useState } from 'react';




import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth"
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext()
export const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    // useState
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Provider
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const redirect = (provider) => {
        setLoading(true);
        return signInWithRedirect(auth, provider);
    };
    // updateProfile
    const updateUserProfile = (profile) => {
        // console.log(profile)
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };
    //  create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };
    // forgot password
    const forgotPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };
    //  useEffect and unsubscribe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        providerLogin,
        createUser,
        signIn,
        logout,
        loading,
        updateUserProfile,
        forgotPassword,
        redirect,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;