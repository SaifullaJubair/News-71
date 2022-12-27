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
        <div className="my-12">
            <h1 className="font-bold text-2xl my-6">Trending News</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className=" relative" style={{
                    background: `linear-gradient(0deg, #151515eb 15%, rgba(6, 6, 6, 0) 100%) , url(${singleNews?.img})`,
                    // backgroundImage: `url(${news?.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                }}>
                    {/* <img
                        className="absolute inset-0 h-full w-full "
                        src={singleNews?.img}
                        alt=""
                    /> */}
                    <div className="flex h-full items-center justify-center ">
                        <div className=" absolute top-80 left-5 mr-24  text-white">
                            <Link className="text-white">
                                <h2 className="text-xl ">{singleNews?.heading}</h2>
                            </Link>
                            <div className="flex text-sm ">
                                <p className="pr-5">
                                    By <span>{singleNews?.authorName}</span>
                                </p>
                                <p>{singleNews?.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                    {/* 1 */}

                    {nextFourNews?.map((news) => (
                        <div className="relative h-52 w-full" style={{
                            background: `linear-gradient(0deg, #151515eb 15%, rgba(6, 10, 10, 0) 100%) , url(${news?.img})`,
                            // backgroundImage: `url(${news?.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                        }}>
                            {/* <img className="h-52 w-full" src={news.img} alt="" /> */}
                            <div>
                                <div className=" absolute top-28 left-5 mr-5  text-white">
                                    <Link className="text-white">
                                        <h2 className="text-sm ">{singleNews?.heading}</h2>
                                    </Link>
                                    <div className="flex text-sm ">
                                        <p className="">
                                            By <span>{singleNews?.authorName}</span>
                                        </p>
                                        <p>{singleNews?.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingNews;