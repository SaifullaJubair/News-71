import React from 'react';
import { Helmet } from 'react-helmet-async';
import UserProfile from '../components/Profile/UserProfile';

const Profile = () => {
   return (
      <div className='max-w-[1440px] w-[95%] mx-auto'>
         <Helmet><title>UserProfile</title></Helmet>
         <UserProfile></UserProfile>
      </div>
   );
};

export default Profile;