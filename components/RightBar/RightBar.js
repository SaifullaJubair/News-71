import { Carousel } from 'flowbite-react';
import React from 'react';

const RightBar = () => {
   return (
      <div>
         <div className="flex gap-2">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
               <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div>
               <h2 className="font-semibold">Leroy Jenkins</h2>
               <span className="text-sm text-gray-400">Date: 12 Dec 2022</span>
               <p className='text-xs py-2'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab eius nostrum dolore esse ipsum itaque maxime ....!
               </p>
            </div>
         </div>
         <div className="flex gap-2 my-4">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
               <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div>
               <h2 className="font-semibold">Leroy Jenkins</h2>
               <span className="text-sm text-gray-400">Date: 12 Dec 2022</span>
               <p className='text-xs py-2'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab eius nostrum dolore esse ipsum itaque maxime ....!
               </p>
            </div>
         </div>
         <div className="flex gap-2">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
               <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>
            <div>
               <h2 className="font-semibold">Leroy Jenkins</h2>
               <span className="text-sm text-gray-400">Date: 12 Dec 2022</span>
               <p className='text-xs py-2'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ab eius nostrum dolore esse ipsum itaque maxime ....!
               </p>
            </div>
         </div>



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