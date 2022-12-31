import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Dashboard from '../components/Dashboard/Dashboard/Dashboard';
import Loader from '../components/Shared/Loader/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const DashboardPage = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (!user?.email) {
        return <h1>Please Login</h1>
    }
    return (

        <div className=''>
            <Helmet><title>Dashboard</title></Helmet>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardPage;