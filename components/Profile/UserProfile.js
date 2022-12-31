import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const UserProfile = () => {
   const { user, logout } = useContext(AuthContext)
   const [userData, setUserData] = useState(null)
   useEffect(() => {
      if (user?.email) {
         fetch(`http://localhost:5000/singleuser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
               console.log(data)
               setUserData(data)
            })

      }
   }, [user])


   return (
      <div>

         <p>{userData?.name}</p>
         <p>{userData?.email}</p>
         <img src={userData?.img} />
      </div>

   );
};

export default UserProfile;