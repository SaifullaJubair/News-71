import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

const AddNews = () => {
 
    const [error, setError] = useState("");
    const [categories, setCategories] = useState(null);

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        fetch('http://localhost:5000/allcategories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
 

    const handleAddItem = (event) => {
        event.preventDefault()
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

                    // console.log(addItem)
                    fetch('http://localhost:5000/addnews', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            form.reset('')
                            // toast("added successful", {
                            //     position: toast.POSITION.TOP_CENTER
                            // })
                            // navigate('/dashboard/myallproduct')
                            alert('add success full')
                        })

                }


            })

        // console.log(types, image, title, description, color, mobile, location, condition, orginal_price, total, rating, price,)
        if (loading) {
            <p>loading</p>
        }

    }




    return (
        <div className="pt-10 max-w-[1440px] w-[95%] mx-auto">
            <div className=' w-10/12 text-yellow-300 mx-auto my-4 text-3xl font-bold m-auto text-left'>
                <h1 className="text-center py-4">Add a article very carefully</h1>
                <form onSubmit={handleAddItem} className="flex mx-4 lg:w-full m-auto flex-col gap-4 shadow-lg p-8 rounded">

                    {/* category_id  */}
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="category_id"
                                value="category_id"
                            />
                        </div>
                        <TextInput
                            id="category_id"
                            name='category_id'
                            type="text"
                            placeholder=" type category_id "
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    {/* total_likes  */}
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="total_likes"
                                value="total_likes"
                            />
                        </div>
                        <TextInput
                            id="total_likes"
                            type="number"
                            name='total_likes '
                            placeholder="type total_likes "
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    {/* total_dislikes  */}
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="total_dislikes"
                                value=" total_dislikes"
                            />
                        </div>
                        <TextInput
                            id=" total_dislikes"
                            type="text"
                            name='total_dislikes'
                            placeholder="Type  total_dislikes "
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    {/* location  */}

                    {/* rating  */}
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="rating"
                                value="Item rating"
                            />
                        </div>
                        <TextInput
                            name="rating"
                            type="text"
                            placeholder="type rating "
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    {/* location 1  */}
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="location1"
                                value="Your location1"
                            />
                        </div>
                        <TextInput
                            name="location1"
                            type="text"
                            placeholder="Type item Location1 "
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    {/* tital view  */}
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="total_view"
                                value=" total_view"
                            />
                        </div>
                        <TextInput
                            name="total_view"
                            type="text"
                            placeholder=" total_view    "
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    {/* title */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="heading"
                                value="Heading"
                                className="font-semibold text-xl"
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
                    {/* details */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="details"
                                value=" details"
                                className="font-semibold text-xl"

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
                                className="font-semibold text-xl"
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
                    {/* <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="author"
                                value="author"
                            />
                        </div>
                        <TextInput
                            name='author'
                            type="text"
                            placeholder='type Your author'
                            required={true}
                            shadow={true}
                        />
                    </div> */}
                    <div>
                        <select name='categoryId' defaultValue={'All'} className="select text-black font-normal  w-full hmax-w-xs rounded my-2">
                            <option disabled selected>Type of news</option>
                            {
                                categories?.map(category =>
                                    <option defaultValue={category._id}>{category.name}</option>

                                )
                            }
                        </select>
                    </div>
                    <div>
                        <input required type="file" name='img' className="file-input text-base  file-input-bordered w-full border-2 rounded mb-2" />
                    </div>

                    {/* {
                    loading ? (<Loading></Loading>) : (<Button className='mb-8' type="submit">
                        Add product
                    </Button>)
                } */}
                    <Button className='mb-8' type="submit">
                        Add News
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;