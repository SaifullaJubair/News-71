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
    return (
        <div className="container mx-auto  ">
            <h1 className="text-3xl font-semibold my-4">Latest News</h1>
            <Carousel responsive={responsive}>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 2</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 2</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 3</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 4</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 5</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 6</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
            </Carousel>


        </div>
    );
};

export default LatestNews;