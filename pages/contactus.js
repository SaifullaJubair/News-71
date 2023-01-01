import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactUs from '../components/ContactUs/ContactUs';



const contactus = () => {

    return (
        <div>
            <Helmet><title>ContactUs</title></Helmet>
            <ContactUs></ContactUs>
        </div>
    );
};

export default contactus;