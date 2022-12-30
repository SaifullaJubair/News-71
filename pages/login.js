
import { useContext } from 'react';
import Login from '../components/Login/Login.js';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider.js';
import '../styles/LoginPage.module.css';

const LoginPage = () => {
   
    // console.log(user);
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto'>
            <Login></Login>
        </div>
    );
};

export default LoginPage;