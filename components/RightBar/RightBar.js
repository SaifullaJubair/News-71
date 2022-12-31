import { Carousel } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';


const RightBar = ({ categoryNewes, rightClick }) => {
   console.log(categoryNewes)

   return (
      <div>

         {
            categoryNewes.map(category => <div onClick={() => rightClick(category._id)} className="flex gap-2 cursor-pointer mb-6 shadow-md">
               <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 text-left ">
                  <img className='h-28 rounded' src={category?.img} />
               </div>
               <div>
                  <h2 className="font-semibold mt-0 pt-0">{category.heading?.slice(0, 17)}...</h2>
                  <span className="text-xs text-gray-400">Date: {category?.createdAt}</span>
                  <p className='text-xs py-2'>
                     {category.details.slice(0, 45)}...
                  </p>
               </div>
            </div>)
         }




         <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-6">
            <Carousel>
               <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
               />
               <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
               />
               <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
               />
               <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
               />
               <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
               />
            </Carousel>
         </div>

      </div>
   );
};

export default RightBar;