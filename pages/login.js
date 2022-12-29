
import { useContext } from 'react';
import Login from '../components/Login/Login.js';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider.js';
import '../styles/LoginPage.module.css';

const LoginPage = () => {
    const { logout } = useContext(AuthContext)
    // console.log(user);
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginPage;