import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiCategory, BiCommentDetail, BiDislike, BiGroup, BiLike } from 'react-icons/bi';
import { BsGraphUp, BsNewspaper } from 'react-icons/bs';
import { CgAddR } from 'react-icons/cg';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineAccountCircle } from 'react-icons/md';

const DashboardSideBar = () => {
    const [hide, setHide] = useState(true);

    const handleToggle = () => {
        setHide(!hide);
    }
    return (
        <div className='bg-blue-700 text-white  rounded-sm w-fit ' onMouseEnter={() => setHide(false)} >
            <div className={hide ? `h-full p-3 space-y-2 w-[80px] ` : `h-full p-3 space-y-2 w-[200px]  `}>
                <div className={hide ? `flex flex-col gap-4 py-2 items-center` : `flex flex-col gap-4 py-2 ml-4`}>
                    <span onClick={() => handleToggle()} className={hide ? 'flex items-center justify-center text-center text-xl' : `flex text-lg`}><HiOutlineMenu className={`${!hide} && 'ml-20' `}></HiOutlineMenu> </span>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div className={hide ? 'hidden hover:block' : 'block'} >
                        <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                        <h4>Admin</h4>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-lg flex flex-col gap-4">
                        <li className="dark:bg-gray-800 dark:text-gray-50">
                            <CgAddR className='inline-block ml-4 mr-6 h-7 text-white' ></CgAddR><Link href={`/dashboard/addnews`}><span className={hide ? 'hidden' : 'inline'} >AddNews</span></Link>
                        </li>
                        <li>
                            <BsNewspaper className='inline-block ml-4 mr-6 h-7' ></BsNewspaper>
                            <Link href={`/dashboard/allnews`}><span className={hide ? 'hidden' : 'inline'} >AllNews</span></Link>
                        </li>
                        <li>
                            <BiGroup className='inline-block ml-4 mr-6 h-7' ></BiGroup>
                            <Link href={`/dashboard/allusers`}><span className={hide ? 'hidden' : 'inline'} >AllUsers</span></Link>
                        </li>
                        <li>
                            <BiCategory className='inline-block ml-4 mr-6 h-7' ></BiCategory>
                            <Link href={`/dashboard/categories`}><span className={hide ? 'hidden' : 'inline'} >Categories</span></Link>
                        </li>
                        <li>
                            <BsGraphUp className='inline-block ml-4 mr-6 h-7' ></BsGraphUp>
                            <Link href={`/dashboard/statistics`}>
                                <span className={hide ? 'hidden' : 'inline'} >Statistics</span></Link>
                        </li>
                        <li>
                            <BiLike className='inline-block ml-4 mr-6 h-7' ></BiLike>
                            <Link href={`/dashboard/alllikednews`}>
                                <span className={hide ? 'hidden' : 'inline'} >All liked</span></Link>
                        </li>
                        <li>
                            <BiDislike className='inline-block ml-4 mr-6 h-7' ></BiDislike>
                            <Link href={`/dashboard/alldislikednews`}>
                                <span className={hide ? 'hidden' : 'inline'} >All Disliked</span></Link>
                        </li>
                        <li>
                            <BiCommentDetail className='inline-block ml-4 mr-6 h-7' ></BiCommentDetail>
                            <Link href={`/dashboard/allcomments`}>
                                <span className={hide ? 'hidden' : 'inline'} >All Comments</span></Link>
                        </li>
                    </ul>
                    <hr className='bg-white border-0' />

                    <ul className="pt-4 pb-2  text-lg flex flex-col gap-4">
                        <li>
                            <MdOutlineAccountCircle className='inline ml-4 mr-6 h-7'></MdOutlineAccountCircle>
                            <Link href={`/userprofile`}><span className={hide ? 'hidden' : 'inline'} >Profile</span></Link>
                        </li>
                        <li>
                            <AiOutlineLogout className='inline ml-4 mr-6 h-7'></AiOutlineLogout>
                            <span className={hide ? 'hidden' : 'inline'} >Logout</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default DashboardSideBar;