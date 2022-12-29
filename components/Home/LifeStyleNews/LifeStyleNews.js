import Link from "next/link";
import { useEffect, useState } from "react";

const LifeStyleNews = () => {

    const [singleNews, setSingleNews] = useState(null);
    const [nextFourNews, setNextFourNews] = useState(null);
    const [newses, setNewses] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/news/LifeStyle?length=5")
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setNewses(data);
                setSingleNews(data[0])
                setNextFourNews(data.slice(1, 5))
            });
    }, []);

    return (
        <div className="my-10 font-Times ">
            <div className=" mx-auto ">
                <h1 className="text-3xl font-bold">LifeStyle</h1>
            </div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-4">
                    {
                        nextFourNews?.map(news =>
                            <div class=" w-full rounded overflow-hidden duration-300 hover:-translate-y-2 shadow-lg">
                                <img
                                    src={news?.img}
                                    className="w-full h-44"
                                    alt=""
                                />
                                <div class="p-3">
                                    <div class="font-bold text-xl mb-2">
                                        {
                                            singleNews?.heading?.length > 43 ?
                                                `${singleNews?.heading.slice(0, 40)}...` : singleNews?.heading}
                                    </div>
                                </div>
                            </div>
                        )
                    }



                    <Link href='#' className="col-span-2 row-span-2 md:col-start-1 md:row-start-1 shadow-md "  >
                        <div class=" w-full rounded overflow-hidden duration-300 hover:-translate-y-2 ">
                            <img
                                src={singleNews?.img}
                                className="w-full"
                                alt=""
                            />
                            <div class="p-3">
                                <div class="font-bold text-2xl mb-2">
                                    {
                                        singleNews?.heading?.length > 43 ?
                                            `${singleNews?.heading.slice(0, 40)}...` : singleNews?.heading}
                                </div>
                                <p>
                                    {
                                        singleNews?.details?.length > 110 ? `${singleNews?.details.slice(0, 100)}...` : singleNews?.details
                                    }
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LifeStyleNews;
