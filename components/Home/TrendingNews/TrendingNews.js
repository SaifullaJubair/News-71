import { Link } from "@mui/material";
import { useEffect, useState } from "react";
const TrendingNews = () => {
    const [singleNews, setSingleNews] = useState(null);
    const [nextFourNews, setNextFourNews] = useState(null);
    const [newses, setNewses] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/news/Political?length=9")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setNewses(data);
                setSingleNews(data[0]);
                setNextFourNews(data.slice(1, 5));
            });
    }, []);
    return (
        <div className="mt-28">
            <h1 className="font-bold text-2xl my-8">Trending News</h1>
            <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-4">
               
                    <div className="  md:col-span-2 duration-300 hover:-translate-y-2 ">
                    <Link href={`/news/view/${singleNews?._id}`}>
                        <div className="flex min-h-[400px] h-full rounded items-end justify-center " style={{
                            background: `linear-gradient(0deg, #151515eb 15%, rgba(6, 6, 6, 0) 100%) , url(${singleNews?.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}>

                           <div className=" text-white p-6  ">
                                <h2 className="text-xl mb-2 ">{singleNews?.heading}</h2>
                                <div className="flex text-sm ">
                                    <p className="pr-5 ">
                                        By <span>{singleNews?.authorName}</span>
                                    </p>
                                    <p>{singleNews?.createdAt}</p>
                                </div>
                            </div>
                           
                        </div>
                        </Link>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-4  ">
                    {/* 1 */}

                    {nextFourNews?.map((news) => (
                        <Link href={`/news/view/${news?._id}`}>
                            <div className="rounded shadow-md h-52 w-full duration-300 hover:-translate-y-2 " style={{
                                background: `linear-gradient(0deg, #151515eb 15%, rgba(6, 10, 10, 0) 100%) , url(${news?.img})`,
                                // backgroundImage: `url(${news?.img})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '100%'
                            }}>
                                <div className="flex items-end h-full  justify-center">
                                    <div className="p-4 text-white">
                                        <h2 className="text-sm mb-1">{singleNews?.heading}</h2>
                                        <div className="flex text-sm ">
                                            <p className="pr-2">
                                                By <span>{singleNews?.authorName}</span>
                                            </p>
                                            <p>{singleNews?.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default TrendingNews;
