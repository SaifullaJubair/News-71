
import { Avatar, Button, Dropdown, Navbar, Sidebar } from 'flowbite-react';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { HiArrowSmRight, HiChartPie, HiDotsVertical, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, IconName } from "react-icons/hi";
import { BiBuoy } from 'react-icons/bi';

const TopBar = () => {
  const { user, logout } = useContext(AuthContext)

  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error))
  }
  return (
    <div className='max-w-[1440px] w-[95%] mx-auto'>

      <Navbar
        fluid={true}
        rounded={true}

      >

        <Navbar.Brand href="/">
          <img
            src="https://i.ibb.co/3CDjvBg/received-1149020545746082-1-removebg-preview-1.png"
            className=" h-16 w-36"
            alt="News71 Logo"
          />

        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>


          <Navbar.Link className='text-base font-semibold' href="/about">
            AboutUs
          </Navbar.Link>
          <Navbar.Link className='text-base font-semibold' href="/contactus">
            ContactUs
          </Navbar.Link>

          {
            user?.uid ?
              <>

                <Navbar.Link className='text-base font-semibold' href='/dashboard'> DashBoard</Navbar.Link>
                <Navbar.Link className='text-base font-semibold' onClick={handleLogOut}> Logout</Navbar.Link>

              </>
              :
              <>
                <Navbar.Link className='text-base font-semibold' href='/register'>SignUp</Navbar.Link>
                <Navbar.Link className='text-base font-semibold' href='/login'>Login</Navbar.Link>
              </>
          }
          <Navbar.Link href='/userprofile' className='md:flex justify-end items-center'>
            {
              user?.photoURL ?
                <>
                  <img title={user?.displayName} className='h-10 rounded-full ' src={user?.photoURL} alt="User_Photo" />
                </>
                :
                <span className='text-xl' ><FaUserAlt title={user?.displayName} ></FaUserAlt> </span>
            }
          </Navbar.Link>
        </Navbar.Collapse>

      </Navbar>






    </div>



  );
};

export default TopBar;