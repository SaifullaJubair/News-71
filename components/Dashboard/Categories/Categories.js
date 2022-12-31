import { Button, Modal, Table, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';
const Categories = () => {
    const [categories, setCategories] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [deleteData, setDeleteData] = useState(null)
    const [editData, setEditData] = useState(null)

    useEffect(() => {
        fetch('https://server-news-71.vercel.app/allcategories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [refetch])

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
    const handleEdit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.editCategoryName.value;
        const data = {
            _id: editData?._id,
            name: name
        }
        fetch('https://server-news-71.vercel.app/editcategory', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                form.reset('')
                toast("Edit successful", {
                    position: toast.POSITION.TOP_CENTER
                })
                setEditData(null);
                setRefetch(!refetch);
            })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const name = e.target.newCategoryName.value;
        const data = { name }
        fetch('https://server-news-71.vercel.app/addcategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset('')
                toast("added successful", {
                    position: toast.POSITION.TOP_CENTER
                })
                setRefetch(!refetch)
            })

    }

    const handleDelete = (data) => {
        fetch('https://server-news-71.vercel.app/deletecategory', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast("Delete successful", {
                    position: toast.POSITION.TOP_CENTER
                })
                setDeleteData(null)
                setRefetch(!refetch)
            })
    }
    return (
        <div className='max-w-[1440px] w-[95%] mx-auto mt-7 gap-6 flex '>

            <DashboardSideBar></DashboardSideBar>

            <div className='flex-grow'>

                <h2 className='title uppercase p-4 text-center  mb-10 bg-purple-300 text-black text-2xl font-semibold'>Add News Category </h2>

                <form onSubmit={handleAdd} className="flex flex-wrap justify-center items-center mx-auto  gap-2">

                    <TextInput
                        id="base"
                        type="text"
                        className='text-gray-600 w-[270px] font-normal'
                        placeholder='Type category name'
                        sizing="lg"
                        name='newCategoryName'
                        required={true}
                    />

                    <Button gradientMonochrome="info" className=' h-[60px] text-xl font-bold' type='submit'>
                        Add Category
                    </Button>

                </form>


                <h2 className='title uppercase p-4 text-center mt-24 mb-10 bg-purple-300 text-black text-2xl font-semibold'>All Categories </h2>

                <Table striped={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            #
                        </Table.HeadCell>

                        <Table.HeadCell>
                            Category Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Operations
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            categories?.map((category, index) =>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>

                                    <Table.Cell className='font-bold'>
                                        {category?.name}
                                    </Table.Cell>

                                    <Table.Cell className='flex gap-3' >

                                        <Button size="xs" onClick={() => showEditModal(category)}>
                                            <FaEdit className='mr-2'></FaEdit> Edit
                                        </Button>

                                        <Button size="xs" color="failure" onClick={() => showModal(category)}>
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
                                                onClick={() => handleDelete(deleteData)}
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
                                    <form onSubmit={handleEdit} >
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            Are you sure you want to update this <span className='font-bold'>{editData?.name}</span> ?
                                        </h3>
                                        {/* name input field  */}
                                        <div>
                                            <div className="mb-2 block">
                                            </div>
                                            <TextInput
                                                name='editCategoryName'
                                                type="text"
                                                defaultValue={editData?.name}
                                                required={true}

                                            />
                                        </div>


                                        <div className="flex justify-center gap-4 mt-8">
                                            <Button
                                                color="success"
                                                type='submit'
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
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Categories;