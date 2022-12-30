import React from 'react';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';

const AllComments = () => {
    return (
        <div  className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7'>
            <DashboardSideBar></DashboardSideBar>
            <p>All coments</p>
        </div>
    );
};

export default AllComments;