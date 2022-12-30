import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';

const AllDisLikedNews = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div  className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7'>
            <DashboardSideBar></DashboardSideBar>
            <p>All disliked </p>
        </div>
    );
};

export default AllDisLikedNews;