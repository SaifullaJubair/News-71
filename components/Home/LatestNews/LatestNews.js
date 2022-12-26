import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const LatestNews = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [newes, setNews] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/latestnews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data)
            })
    }, [])

    return (

        <div className="container mx-auto  ">
            <h1 className="text-3xl font-semibold my-4">Latest News</h1>
            {
                newes?.map(news =>
                    <div>
                        <Carousel responsive={responsive}>
                            <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                                <div className="flex justify-between pb-4 border-bottom">
                                    <div className="flex items-center">
                                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 1</a>
                                    </div>
                                    <a rel="noopener noreferrer" href="#">See All</a>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src="https://i.ibb.co/2vnH3DN/obaidul-quader-1639472909782-1639472909783.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                        <div className="flex items-center text-xs">
                                            <span>6 min ago</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="#" className="block">
                                            <h3 className="text-xl font-semibold dark:text-violet-400">Quader says will work for party even if responsibility changes</h3>
                                        </a>
                                        <p className="leading-snug dark:text-gray-400">Awami League General Secretary Obaidul Quader said that even if his responsibility changes after the 22nd national council of Awami League (AL), he will still be working for the party.  He said this to journalists at a press conference on ...</p>
                                    </div>
                                </div>
                            </div>


                        </Carousel>
                    </div>
                )
            }


        </div>
    );
};

export default LatestNews;