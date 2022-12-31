import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About/About';

const about = () => {
    return (
        <div>
            <Helmet>
                <title>AboutUs</title>
            </Helmet>
            <About></About>
        </div>
    );
};

export default about;