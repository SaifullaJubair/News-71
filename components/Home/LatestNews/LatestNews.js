// import { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const LatestNews = () => {
//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };
//     const [newes, setNews] = useState(null);
//     useEffect(() => {
//         fetch('http://localhost:5000/latestnews')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setNews(data)
//             })
//     }, [])

//     return (

//         <div className="container mx-auto  ">
//             <h1 className="text-3xl font-semibold my-4">Latest News</h1>
//             {
//                 newes.map(news =>
//                     <Carousel responsive={responsive}>
//                         <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 ">
//                             <div className="flex justify-between pb-4 border-bottom">
//                                 <div className="flex items-center">
//                                     <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">News: 1</a>
//                                 </div>
//                                 <a rel="noopener noreferrer" href="#">See All</a>
//                             </div>
//                             <div className="space-y-4">
//                                 <div className="space-y-2">
//                                     <img src="https://i.ibb.co/2vnH3DN/obaidul-quader-1639472909782-1639472909783.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
//                                     <div className="flex items-center text-xs">
//                                         <span>6 min ago</span>
//                                     </div>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <a rel="noopener noreferrer" href="#" className="block">
//                                         <h3 className="text-xl font-semibold dark:text-violet-400">Quader says will work for party even if responsibility changes</h3>
//                                     </a>
//                                     <p className="leading-snug dark:text-gray-400">Awami League General Secretary Obaidul Quader said that even if his responsibility changes after the 22nd national council of Awami League (AL), he will still be working for the party.  He said this to journalists at a press conference on ...</p>
//                                 </div>
//                             </div>
//                         </div>


//                     </Carousel>)
//             }


//         </div>
//     );
// };

// export default LatestNews;


// import React from 'react';

// const LatestNews = () => {
//     return (
//         <div>
//             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

//                 <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Sed ut perspiciatis unde omnis iste natus error
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Leverage agile frameworks to provide a robust synopsis
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                     <a href="/" aria-label="View Item">
//                         <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
//                             <img
//                                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//                                 src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//                                 alt=""
//                             />
//                             <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
//                                 <p className="text-sm font-medium tracking-wide text-white">
//                                     Rough pomfret lemon shark plownose chimaera
//                                 </p>
//                             </div>
//                         </div>
//                     </a>
//                 </div>
//                 <div className="text-center">
//                     <a
//                         href="/"
//                         aria-label=""
//                         className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//                     >
//                         See more
//                         <svg
//                             className="inline-block w-3 ml-2"
//                             fill="currentColor"
//                             viewBox="0 0 12 12"
//                         >
//                             <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//                         </svg>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LatestNews;