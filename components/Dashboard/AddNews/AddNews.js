import { useQuery } from "@tanstack/react-query";
import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddNews = () => {

    const { user, logout, updateUserProfile, providerLogin, createUser } =
        useContext(AuthContext);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    const { data: addNews = [], } = useQuery({
        queryKey: ['addNews'],

        queryFn: async () => {
            const res = await fetch(`http://192.168.1.103:5000/users/email?email=${user?.email}`);
            const data = await res.json();

            return data;
        }
    })

    const handleAddItem = (event) => {
        event.preventDefault()
        const form = event.target;
        const category_id = form.category_id.value;
        const total_likes = form.total_likes.value;
        const total_dislikes = form.total_dislikes.value;
        const location = form.location.value;
        const rating = form.rating.value;
        const location1 = form.location1.value;
        const total_view = form.total_view.value;
        const title = form.title.value;
        const details = form.details.value;
        const author = form.author.value;
        const types = form.types.value;
        const image = form.img.files[0]
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
                    // console.log(data.data.url)

                    const addItem = {
                        title: title,
                        email: user?.email,
                        displayName: user?.displayName,
                        addNews,
                        img: data.data.url,
                        types, image, total_dislikes, total_likes, category_id, location, author, details, total_view, rating, location1, createdAt: new Date().toISOString()


                    }

                    // console.log(addItem)
                    fetch('http://192.168.1.103:5000/items', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(addItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)

                            // toast("added successful", {
                            //     position: toast.POSITION.TOP_CENTER
                            // })
                            // navigate('/dashboard/myallproduct')

                        })

                }


            })

        // console.log(types, image, title, description, color, mobile, location, condition, orginal_price, total, rating, price,)
        if (loading) {
            <p>loading</p>
        }

    }




    return (
        <div className="w-11/12 mx-auto ">
            <div className=' w-10/12 text-yellow-300 mx-auto my-4 text-3xl font-bold m-auto text-left'>
                <h1>Add a article very carefully</h1>
                <form onSubmit={handleAddItem} className="flex mx-4 lg:w-full m-auto flex-col gap-4">

                    {/* category_id  */}
                    <div>
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
                    </div>
                    {/* total_likes  */}
                    <div>
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
                    </div>
                    {/* total_dislikes  */}
                    <div>
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
                    </div>
                    {/* location  */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="location"
                                value="Item location"
                            />
                        </div>
                        <TextInput
                            id=" location"
                            type="text"
                            name='location'
                            placeholder="news location "
                            required={true}
                            shadow={true}
                        />
                    </div>
                    {/* rating  */}
                    <div>
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
                    </div>
                    {/* location 1  */}
                    <div>
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
                    </div>
                    {/* tital view  */}
                    <div>
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
                    </div>
                    {/* title */}
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="title"
                                value="title"
                            />
                        </div>
                        <TextInput
                            name="title"
                            type="text"
                            placeholder="Type title "
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

                            />
                        </div>
                        <TextInput
                            className=''
                            name="details"
                            type="text"

                            placeholder='details'
                            required={true}
                            shadow={true}

                        />
                    </div>
                    <div>
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
                    </div>
                    <div>
                        <select name='types' className="select select-primary w-full hmax-w-xs">
                            <option disabled selected>Type of news</option>
                            <option defaultValue={'Gaming_pc'}>International nes</option>
                            <option defaultValue={'Brand_pc'}>Local news</option>
                            <option defaultValue={'Official_pc'}>Sports</option>
                            <option defaultValue={'Mini_pc'}>Technology</option>
                        </select>
                    </div>
                    <div>
                        <input required type="file" name='img' className="file-input file-input-bordered file-input-sm w-full border-2 rounded" />
                    </div>

                    {/* {
                    loading ? (<Loading></Loading>) : (<Button className='mb-8' type="submit">
                        Add product
                    </Button>)
                } */}
                    <Button className='mb-8' type="submit">
                        Add product
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;