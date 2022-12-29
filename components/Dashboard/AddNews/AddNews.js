import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";
import Loader from "../../Shared/Loader/Loader";

const AddNews = () => {

    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        fetch('http://localhost:5000/allcategories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    const handleAddItem = (event) => {
        event.preventDefault()
        setLoading(true)
        const form = event.target;
        const category_id = form.categoryId.value;
        const total_likes = 0;
        const total_dislikes = 0;
        const location = form.location.value;
        const rating = 0;
        const total_view = 0;
        const heading = form.heading.value;
        const details = form.details.value;
        const author = 'News-71';
        const image = form.img.files[0];
        const date = new Date();
        const formatDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        setLoading(true)
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

                    const addItem = {
                        heading: heading,
                        email: 'news-71@gmail.com',
                        authorName: author,
                        img: data.data.url,
                        total_dislikes, total_likes, category_id, location, details, total_view, rating, createdAt: formatDate
                    }

                    fetch('http://localhost:5000/addnews', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            form.reset('')
                            toast("added successful", {
                                position: toast.POSITION.TOP_CENTER
                            })
                        })
                }
            })
        setLoading(false)
    }


    return (
        <div className="pt-10 max-w-[1440px] w-[95%] mx-auto flex gap-6">
            <div>
                <DashboardSideBar></DashboardSideBar>
            </div>

            <div className=' rounded-sm text-3xl font-bold  text-left flex-grow bg-blue-700 text-white'>
                <h1 className="text-center py-4">Add a article very carefully</h1>
                <form onSubmit={handleAddItem} className="flex mx-4 m-auto flex-col gap-4  p-8 rounded">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="heading"
                                value="Heading"
                                className="font-semibold text-xl text-white"
                            />
                        </div>
                        <TextInput
                            className="text-lg font-light"
                            name="heading"
                            type="text"
                            placeholder="Type heading"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="details"
                                value="Details"
                                className="font-semibold text-xl text-white"

                            />
                        </div>
                        <TextInput

                            name="details"
                            type="text"
                            className="text-lg font-light"
                            placeholder='details'
                            required={true}
                            shadow={true}

                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="location"
                                value="News location"
                                className="font-semibold text-xl text-white"
                            />
                        </div>
                        <TextInput
                            id=" location"
                            type="text"
                            name='location'
                            placeholder="news location "
                            required={true}
                            shadow={true}
                            className="text-lg font-light"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor=""
                                value="Select Category"
                                className="font-semibold text-xl text-white"
                            />
                        </div>
                        <select name='categoryId' defaultValue='All' className="select text-black font-normal  w-full hmax-w-xs rounded my-2">
                            <option disabled selected>Type of news</option>
                            {
                                categories?.map(category =>
                                    <option  defaultValue={category?.name}>{category?.name}</option>

                                )
                            }
                        </select>
                    </div>
                    <div>
                        <input required type="file" name='img' className="file-input text-base  file-input-bordered w-full border-2 rounded mb-2" />
                    </div>

                    <div className="flex items-center justify-center">
                        {
                            loading && <Loader></Loader>
                        }
                    </div>
                    <Button className='mb-8 bg-green-800 w-fit px-14 mx-auto hover:bg-green-600 shadow' type="submit">
                        Add News
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;