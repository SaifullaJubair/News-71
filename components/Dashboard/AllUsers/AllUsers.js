import { Button, Modal, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';


const AllUsers = () => {
    const [users, setUsers] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [deleteData, setDeleteData] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [refetch])

    const handleDeleteUser = user => {
        // console.log(product);
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    setRefetch(!refetch)
                    // toast.success(`User ${user.name} deleted successfully`)
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
    const onClose = () => {
        setDeleteData(null)
    }
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto'>
            <h2 className='title uppercase p-10 text-center mt-24 mb-10 bg-purple-300 text-black text-2xl font-semibold'>All Users </h2>

            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>
                        #
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
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {user.email}
                                </Table.Cell>
                                <Table.Cell>
                                    {user.role}
                                </Table.Cell>
                                <Table.Cell className='flex gap-3' >
                                    <span >
                                        <Button size="xs">
                                            <FaEdit className='mr-2'></FaEdit> Edit
                                        </Button>
                                    </span>
                                    <Button size="xs" color="failure" onClick={() => showModal(user)}>
                                        <FaTrash className='mr-2'></FaTrash> Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>)
                    }
                </Table.Body>
            </Table>
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
        </div >
    );
};

export default AllUsers;