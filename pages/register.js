import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Register from "../components/Register/Register";

const RegisterPage = () => {

   
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto'>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            <Register></Register>
         
        </div>
    );
};

export default RegisterPage;