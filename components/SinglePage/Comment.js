import { useQuery } from '@tanstack/react-query';
import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';

const Comment = ({ comments, id }) => {


   // const { data: comments = [], refetch } = useQuery({
   //    queryKey: ['comment'],

   //    queryFn: async () => {
   //          const res = await fetch(`https://server-news-71.vercel.app/comment/${id}`);
   //          const data = await res.json();
   //          console.log(data)     
   //          return data;
   //    }
   // })
   // refetch()


   return (
      <section>
         <h2>Total {comments.length} Comments</h2>

         {
            id ? <div className='my-3'>
               {
                  comments?.map(comment => <div class="flex  border-b-2 pb-2 gap-3 my-3">
                     <img class="inline-block h-12 w-12 rounded-full   border-blue " src={comment?.img} />
                     <div>

                        <h5 className=' text-gray-700 flex items-center gap-2 font-semibold'>{comment.username}</h5>
                        <p className='text-sm '>{comment.comment}</p>
                        <p className='text-sm '>{comment.createdAt?.slice(0, 10)}</p>
                        <p className='text-sm py-2 text-gray-400'>Post:{comment.createdAt?.slice(11, 16)}</p>

                     </div>

                  </div>)
               }



            </div>
               :
               <Loader></Loader>
         }

      </section>
   );
};

export default Comment;