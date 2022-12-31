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
    console.log(user)
    // const [likedNews, setLikedNews] = useState(null)
    // const [refetch, setRefetch] = useState(false);
    // const [deleteData, setDeleteData] = useState(null);

    // const showModal = (user) => {
    //     setDeleteData(user)
    //     console.log(user);
    // }

    // const onClose = () => {
    //     setDeleteData(null)
    // }

    return (
        <div className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7'>
            <DashboardSideBar></DashboardSideBar>
            <div className='flex-grow'>
                <h2 className='title uppercase p-10 text-center mb-10 bg-purple-300 text-black text-2xl font-semibold'>All Users </h2>

                <Table striped={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Image
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>

                        <Table.HeadCell>
                            Operations
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {/* {index + 1} */} #
                            </Table.Cell>
                            <Table.Cell>
                                <img src={user?.photoURL} className="h-12 w-12 rounded-full ring-4 ring-blue" alt="" />
                            </Table.Cell>
                            <Table.Cell>
                                {user?.displayName}
                            </Table.Cell>

                            <Table.Cell className='flex gap-3' >

                                <Button size="xs" color="failure" onClick={() => showModal(user)}>
                                    <FaTrash className='mr-2'></FaTrash> Delete
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>

            {/* <div>
                {
                    deleteData !== null && <div>
                        <div>

                            <Modal
                                show={true}
                                size="md"
                                popup={true}
                                onClose={onClose}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="text-center">
                                        
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            Are you sure you want to delete this <span className='font-bold'>{deleteData?.name}</span> ?
                                        </h3>
                                        <div className="flex justify-center gap-4">
                                            <Button
                                                color="failure"
                                                onClick={() => handleDeleteUser(deleteData)}
                                            >
                                                Yes, I'm sure
                                            </Button>
                                            <Button
                                                color="gray"
                                                onClick={() => { setDeleteData(null) }}
                                            >
                                                No, cancel
                                            </Button>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                }
            </div> */}

        </div>
    );
};

export default AllLikedNews;