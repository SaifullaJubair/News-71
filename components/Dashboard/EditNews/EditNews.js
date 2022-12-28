import { Select, Textarea, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const EditNews = ({newsData}) => {

    const [categories, setCategories] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/allcategories', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    

    return (
        <div>
            <h2 className='title uppercase p-4 text-center mt-24 mb-10 bg-purple-300 text-black text-2xl font-semibold rounded'>Edit News </h2>
            <form className='flex flex-col gap-4 shadow p-6 max-w-[800px] w-[95%] mx-auto' >

                <div>
                    <h2>Heading</h2>
                    <TextInput
                        id="small"
                        type="text"
                        sizing="md"
                        required={true}
                        defaultValue={newsData?.heading}
                    />
                </div>
                <div>
                    <h2>Categories</h2>
                    <Select
                        id="categories"
                        required={true}
                        className='w-full'
                        name="categoryInput"
                    >
                        {
                            categories?.map(category => {
                                return newsData?.category_id === category.name ? <option value={category.name} >
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
                    />
                </div>
                <div>
                    <h2>Details</h2>
                    <Textarea
                        id="small"
                        type="text"
                        sizing="md"
                        rows={5}
                        defaultValue={newsData?.details}
                    />
                </div>

            </form>
        </div>
    );
};

export default EditNews;