import { Button, Modal, Select, Table, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaMailBulk, FaTrash, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';


const AllUsers = () => {
    const [users, setUsers] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [deleteData, setDeleteData] = useState(null)
    const [editData, setEditData] = useState(null)
    useEffect(() => {
        fetch('https://server-news-71.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [refetch])

    const handleMakeAdmin = (id) => {
        fetch(`https://localhost:5000/users/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch()
                }
            })
    }

    const handleDeleteUser = user => {
        fetch(`https://server-news-71.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    setRefetch(!refetch)
                    toast(`User ${user.name} deleted successfully`, {
                        position: toast.POSITION.TOP_CENTER

                    })
                    setDeleteData(null)
                }
            })
    }
    const showModal = (user) => {
        setDeleteData(user)
        console.log(user);
    }
    const showEditModal = (user) => {
        setEditData(user)
        console.log(user);
    }
    const onClose = () => {
        setDeleteData(null)
    }
    const onEditClose = () => {
        setEditData(null)
    }
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
                            Email
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Role
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Operations
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users?.map((user, index) =>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <img src={user.img} className="h-12 w-12 rounded-full ring-4 ring-blue" alt="" />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.email}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {user.role}
                                    </Table.Cell>
                                    <Table.Cell className='flex gap-3' >

                                        <Button size="xs" onClick={() => showEditModal(user)}>
                                            <FaEdit className='mr-2'></FaEdit> Edit
                                        </Button>

                                        <Button size="xs" color="failure" onClick={() => showModal(user)}>
                                            <FaTrash className='mr-2'></FaTrash> Delete
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
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
                                    {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
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


            {/* Update user modal  */}

            {
                editData !== null && <div>
                    <div>

                        <Modal
                            show={true}
                            size="md"
                            popup={true}
                            onClose={onEditClose}
                        >
                            <Modal.Header />
                            <Modal.Body>
                                <div >
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                        Are you sure you want to update this <span className='font-bold'>{editData?.name}</span> ?
                                    </h3>
                                    {/* name input field  */}
                                    <div>
                                        <div className="mb-2 block">
                                            {/* <Label
                                                htmlFor="name"
                                                value="Your name"
                                            /> */}
                                        </div>
                                        <TextInput
                                            id="name"
                                            type="name"
                                            value={editData?.name}
                                            icon={FaUser}
                                            readOnly
                                        />
                                    </div>
                                    {/* email input field  */}
                                    <div className='my-4'>
                                        <div className="mb-2 block">
                                            {/* <Label
                                                htmlFor="email4"
                                                value="Your email"
                                            /> */}
                                        </div>
                                        <TextInput
                                            id="email4"
                                            type="email"
                                            icon={FaMailBulk}
                                            value={editData?.email}
                                            readOnly
                                        />
                                    </div>
                                    <div id="select" className='my-4'>
                                        <div className="mb-2 block">
                                            {/* <Label
                                                htmlFor="role"
                                                value="Select your country"
                                            /> */}
                                        </div>
                                        <Select
                                            id="role"
                                            required={true}
                                        >
                                            <option>
                                                Admin
                                            </option>
                                            <option>
                                                User
                                            </option>

                                        </Select>
                                    </div>
                                    {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}

                                    <div className="flex justify-center gap-4">
                                        <Button
                                            color="success"
                                            onClick={() => handleMakeAdmin(editData)}
                                        >
                                            Yes, I'm sure
                                        </Button>
                                        <Button
                                            color="gray"
                                            onClick={() => { setEditData(null) }}
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
        </div >
    );
};

export default AllUsers;