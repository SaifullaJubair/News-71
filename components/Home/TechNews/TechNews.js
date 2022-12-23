import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const TechNews = () => {

    const [newes, setNews] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/news/Tech?length=8')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data)
            })
    }, [])


    return (

        <div>

            <div className="py-16 mx-auto ">
                <h1 className="text-3xl mx-2 my-4">Tech News</h1>
                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        newes?.map(news =>
                            <div
                                key={news?._id}>
                                <a
                                    href="/"
                                    aria-label="View Item"
                                    className=""
                                >
                                    <div className="flex flex-col h-full overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                                        <img
                                            src={news?.img}
                                            className="object-cover w-full h-48"
                                            alt=""
                                        />

                                        <div className="flex-grow border border-t-0 rounded-b">
                                            <div className="p-5">
                                                <h6 className="mb-2 font-semibold leading-5  truncate ...">
                                                    {news?.heading}
                                                </h6>
                                                <p className="text-sm text-gray-900">
                                                    {news?.details?.length > 250 ? `${news?.details.slice(0, 250)} ...` : news?.details}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        )
                    }
                </div>
                <div className="text-center">
                    <Button variant="contained " className="bg-blue-500 font-semibold">Show More</Button>
                </div>
            </div>
        </div>
    );
};

export default TechNews;