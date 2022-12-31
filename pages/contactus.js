import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactUs from '../components/ContactUs/ContactUs';
import Loader from '../components/Shared/Loader/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const contactus = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (!user?.email) {
        return <p>Please Login</p>
    }
    return (
        <div>
            <Helmet><title>ContactUs</title></Helmet>
            <ContactUs></ContactUs>
        </div>
    );
};

export default contactus;