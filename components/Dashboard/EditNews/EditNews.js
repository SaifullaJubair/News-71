import { Button, FileInput, Select, Textarea, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';

const EditNews = ({ newsid }) => {

    const [categories, setCategories] = useState(null);
    const [newsData, setNewsData] = useState(null)
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/allcategories', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {

        if (newsid) {
            fetch(`http://localhost:5000/getnews?id=${newsid}`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    setNewsData(data)

                })
        }
    }, [newsid, reload])

    const handleEdit = e => {
        e.preventDefault();
        const form = e.target;
        const heading = form.heading.value;
        const category_id = form.category_id.value;
        const location = form.location.value;
        const details = form.details.value;
        const image = form.image.files[0];
        if (image !== undefined) {
            const formData = new FormData()
            formData.append('image', image)
            const url = `https://api.imgbb.com/1/upload?key=2d5b1a5401d8ef6742d2329ac8957810`
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        const editData = {
                            heading,
                            details,
                            location,
                            category_id,
                            img: data.data.url,
                        }

                        fetch(`http://localhost:5000/editnews/${newsData?._id}`, {
                            method: 'PUT',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(editData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                form.reset('')
                                toast("Edit successful", {
                                    position: toast.POSITION.TOP_CENTER
                                })
                                setReload(!reload)
                            })
                    }
                })
        }
        else {
            const editData = {
                heading,
                details,
                location,
                category_id,
                img: newsData?.img,
            }

            fetch(`http://localhost:5000/editnews/${newsData?._id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(editData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    form.reset('')
                    toast("Edit successful", {
                        position: toast.POSITION.TOP_CENTER
                    })
                    setReload(!reload)
                })
        }
    }

    return (
        <div className='max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-[100px]'>
            <DashboardSideBar/>
            <div className='flex-grow'>
                <h2 className='title uppercase p-4 text-center mb-10 bg-purple-300 text-black text-2xl font-semibold rounded'>Edit News </h2>
                <form className='flex flex-col gap-4 shadow p-6  mx-auto' onSubmit={handleEdit}>

                    <div>
                        <h2>Heading</h2>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="md"
                            required={true}
                            defaultValue={newsData?.heading}
                            name='heading'
                        />
                    </div>
                    <div>
                        <h2>Categories</h2>
                        <Select
                            id="categories"
                            required={true}
                            className='w-full'
                            name="category_id"
                            defaultValue={newsData?.category_id}
                        >
                            {
                                categories?.map(category => {
                                    return newsData?.category_id === category.name ? <option value={category.name} selected>
                                        {category.name}
                                    </option> : <option value={category.name} >
                                        {category.name}
                                    </option>
                                }
                                )
                            }

                        </Select>
                    </div>
                    <div>
                        <h2>Location</h2>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="md"
                            defaultValue={newsData?.location}
                            name='location'
                            required={true}
                        />
                    </div>
                    <div>
                        <h2>Present image</h2>
                        <img src={newsData?.img} className='h-[100px]' alt="" />
                    </div>

                    <div id="fileUpload">
                        <h2>Upload Image</h2>
                        <FileInput
                            id="file"
                            name='image'
                        />
                    </div>
                    <div>
                        <h2>Details</h2>
                        <Textarea
                            id="small"
                            type="text"
                            sizing="md"
                            rows={8}
                            defaultValue={newsData?.details}
                            name='details'
                            required={true}
                        />
                    </div>
                    <div className='flex gap-4 flex-wrap'>
                        <div>
                            <Button size="sm" className='w-full' color="success" type='submit'>
                                Yes, Edit
                            </Button>
                        </div>
                        <Link href={`/dashboard/allnews`}>
                            <Button size="sm" color="failure">
                                No, Cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNews;