import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';

const AllDisLikedNews = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7'>
            <DashboardSideBar></DashboardSideBar>
            <div>
                <h1>ALL Dislike News</h1>
            </div>
        </div>
    );
};

export default AllDisLikedNews;