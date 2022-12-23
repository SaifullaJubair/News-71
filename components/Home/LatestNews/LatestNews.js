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
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 2</a>
                        </div>
                        <a rel="noopener noreferrer" href="#">See All</a>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://i.ibb.co/Sy7Gpdg/bnp-25.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">The Awami League has invited BNP leaders to its 22nd national council, which will be held on Saturday.   A delegation led by Awami League Deputy Office Secretary Sayem Khan visited the BNP's central office at Naya Paltan in...</p>
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
                            <img src="https://i.ibb.co/fpgXFJQ/1671777821.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Jerusalem chef gives tourists a Palestinian taste of life in the Old City</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Palestinian cuisine really utilises what the land has to offer,\" Bukhari says, explaining that these heavily plant-based recipes are deeply rooted in a connection to the local produce.  Bukhari, descended from Sufi mystics ...</p>
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
                            <img src="https://i.ibb.co/DLxnkWk/file-photo-shows-a-general-view-of-the-awami-league-headquarters-at-bangabandhu-avenue-in-dhaka-syed.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">8 presidents, 9 general secretaries of Awami League since 1949</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Awami League Joint General Secretary and Education Minister Dr Dipu Moni on Friday said only the Awami League runs the party in accordance with election laws.  The way the Awami League has led the adipisicing elit. Repellat, excepturi.</p>
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
                            <img src="https://i.ibb.co/6sDdWKv/education-minister-jsc-exam-4-1572692715210-1572692715211.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center text-xs">
                                <span>6 min ago</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">The 22nd national council of ruling Awami League will be held in the capital on Saturday with Prime Minister Sheikh Hasina corrupti praesentium pariatur architecto...</p>
                        </div>
                    </div>
                </div>

            </Carousel>


        </div>
    );
};

export default LatestNews;