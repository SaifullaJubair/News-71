import React from 'react';

const Comment = () => {
   return (
      <section>
         <div className='my-3'>
            <div class="flex  gap-3 my-3">
               <img class="inline-block h-12 w-12 rounded-full  border-blue" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmFSwevP0kof-BLRkEgsyG3i1Q69B9chnqrbEb6L8&s" />
               <div>
                  <h5 className=' text-gray-700 flex items-center gap-2 font-semibold'>Rana</h5>
                  <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloribus? Pariatur ad nihil dignissimos inventore. Perferendis doloremque aperiam dolor dolorem. Vel, rem inventore su</p>
                  <p className='text-sm py-2 text-gray-400'>Post:10:22 PM</p>
               </div>
            </div>
            <div class="flex  gap-3 my-3">
               <img class="inline-block h-12 w-12 rounded-full  border-blue" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
               <div>
                  <h5 className=' text-gray-700 flex items-center gap-2 font-semibold'>Shimul</h5>
                  <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloribus? Pariatur ad nihil dignissimos inventore. Perferendis doloremque aperiam dolor dolorem. Vel, rem inventore su</p>
                  <p className='text-sm py-2 text-gray-400'>Post:10:15 PM</p>
               </div>
            </div>
            <div class="flex  gap-3 my-3">
               <img class="inline-block h-12 w-12 rounded-full  border-blue" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
               <div>
                  <h5 className=' text-gray-700 flex items-center gap-2 font-semibold'>Mehedi</h5>
                  <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloribus? Pariatur ad nihil dignissimos inventore. Perferendis doloremque aperiam dolor dolorem. Vel, rem inventore su</p>
                  <p className='text-sm py-2 text-gray-400'>Post:10:00 PM</p>
               </div>
            </div>

         </div>

      </section>
   );
};

export default Comment;