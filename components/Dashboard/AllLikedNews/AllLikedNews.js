import { Avatar, Button, Modal, Select, Table } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';
import Loader from '../../Shared/Loader/Loader';


const AllLikedNews = () => {
    const { user } = useContext(AuthContext)
    const [likes, setLiked] = useState(null)


    useEffect(() => {
        fetch(`https://server-news-71.vercel.app/like/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLiked(data)

            })
    }, [user?.email])

    return (
        <div className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7'>
            <DashboardSideBar></DashboardSideBar>
            <div className='flex-grow'>
                {
                    likes ? <h2 className='title uppercase p-10 text-center mb-10 bg-purple-300 text-black text-2xl font-semibold'>All Like </h2> :
                        <Loader></Loader>
                }
                {
                    likes?.length ? <p></p> :
                        <p className='text-2xl mt-16 text-center text-orange-500 '>You have No Like</p>
                }

                <Table striped={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Image
                        </Table.HeadCell>
                        <Table.HeadCell>
                            News Heading
                        </Table.HeadCell>
                        <Table.HeadCell>
                            date
                        </Table.HeadCell>
                        <Table.HeadCell>
                            category
                        </Table.HeadCell>

                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            likes?.map((comment, index) =>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img src={comment.newsImg} className="h-12 w-12 rounded  " alt="" />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link className='text-blue-400 ' href={`/news/view/${comment?.id}`}> {comment?.heading?.slice(0, 40)}...</Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {comment.createdAt?.slice(0, 10)}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {comment.category_id}
                                    </Table.Cell>

                                </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>

        </div >
    );
};

export default AllLikedNews;