import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FaFacebook, IconName } from "react-icons/fa";

const EducationNews = () => {
    const [newes, setNews] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/news/Education')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data)
            })
    }, [])


    return (
        <div className=" py-16 mx-auto">
            <h1 className="text-3xl my-6 font-semibold">Education News</h1>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                {
                    newes?.map(news =>
                        <div key={news?._id}
                        >

                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                    src={news?.img}
                                    alt=""
                                />
                                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                    <p className="mb-4 text-lg font-bold text-gray-100 truncate ..."> {news?.heading}</p>
                                    <p className="text-sm tracking-wide text-gray-300">
                                        {news?.details?.length > 200 ? `${news?.details.slice(0, 200)} ...` : news?.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="text-center">
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    View all
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default EducationNews;