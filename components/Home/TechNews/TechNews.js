import { Button } from "@mui/material";
import { Card } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const TechNews = () => {

    const [newes, setNews] = useState(null);
    useEffect(() => {
        fetch('https://server-news-71.vercel.app/news/Tech?length=8')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data)
            })
    }, [])


    return (

        <div>
            <div >
                <h1 className="text-3xl font-semibold mx-2 my-4">Tech News</h1>
                <div className="grid gap-5 row-gap-5 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    {newes?.map(news =>

                        <div className="rounded-lg shadow-md dark:bg-gray-800 overflow-hidden  dark:border-gray-700 hover:-translate-y-2 duration-300">

                            <Link href={`/news/view/${news?._id}`}>

                                <img className=" h-52 w-full rounded-lg" src={news?.img} alt="" />
                                <div className="p-5">

                                    <h5 className="mb-2 text-xl font-bold tracking-tight truncate ... text-gray-900 dark:text-white">{news?.heading}</h5>


                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {news?.details?.length > 160 ? `${news?.details.slice(0, 160)} ...` : news?.details}
                                    </p>
                                    <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default TechNews;