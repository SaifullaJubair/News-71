import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa';

const PleaseLogin = () => {
   return (
      <div className='max-w-[1440px] w-[95%] mx-auto'>
         <div className='p-10 '>
            <div className='flex-col flex items-center justify-center'>
               <img src="https://i.ibb.co/7tVqJXS/93270-password-lock-animation.gif" className='w-80 ' alt="" />
               <h1 className='text-2xl font-bold my-2'>Authentication required</h1>
               <p className='text-red-500 font-semibold my-4'>Please <span>login</span> first to access or back to home page.</p>
            </div>
            <div className='flex gap-2 my-2 mb-10 justify-center items-center'>
               <Link href={'/'}> <Button
                  outline={true}
               >
                  <FaHome></FaHome> <span className='ml-2'>Home</span>
               </Button></Link>
               <Link href={'/login'}>
                  <Button
                     outline={true}
                     gradientDuoTone="purpleToBlue"
                  >
                     <FaUser></FaUser> <span className='ml-2'>LogIn</span>
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default PleaseLogin;