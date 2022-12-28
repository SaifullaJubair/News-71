import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const UserProfile = () => {
   const { user, logout } = useContext(AuthContext)

   return (
      <div>
         <p>Name: {user?.displayName} </p>
         <p>Email: {user?.email} </p>
      </div>
   );
};

export default UserProfile;