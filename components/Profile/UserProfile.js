import { data } from 'autoprefixer';
import { Button, Card } from 'flowbite-react';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import PleaseLogin from '../PleaseLogin/PleaseLogin';
import Loader from '../Shared/Loader/Loader';

const UserProfile = () => {
   const { user, logout, loading } = useContext(AuthContext)

   if (loading) {
      return <Loader></Loader>
   }
   if (!user?.email) {
      return <PleaseLogin></PleaseLogin>
   }

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


   const handleLogOut = () => {
      logout()
         .then(() => { })
         .catch(error => console.log(error))
   }


   return (
      <div >
         <div className="max-w-md mx-auto my-6">
            <Card imgSrc={userData?.img}>
               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {userData?.name}
               </h5>
               <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className='font-semibold'>Role:</span> {userData?.role}
               </p>
               <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className='font-semibold'> Email:</span> {userData?.email}
               </p>
               <div className='flex gap-2'>
                  <Link href={'/'}> <Button
                     outline={true}
                  >
                     <FaHome></FaHome> <span className='ml-2'>Home</span>
                  </Button></Link>
                  <Link href={'/login'}>
                     <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                        onClick={handleLogOut}

                     >
                        <FaUser></FaUser> <span className='ml-2'>LogOut</span>
                     </Button>
                  </Link>
               </div>
            </Card>
         </div>
      </div>

   );
};

export default UserProfile;