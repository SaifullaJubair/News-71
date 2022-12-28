import React from 'react';
import { FaAngleDown, FaComment, FaEye, FaFacebook, FaLocationArrow, FaShare, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa';
import { BiDislike, BiLike, BiSend } from "react-icons/bi";
import { Avatar, Button, Rating, TextInput } from 'flowbite-react';
import Comment from './Comment';

const SinglePage = () => {
   return (
      <div >
         <h2 className='text-3xl font-semibold text-gray-700 mb-6'>News heading, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum autem mole</h2>

         <div className='flex flex-wrap gap-3 justify-between  my-3'>

            <div>
               <div class="flex items-center gap-3 my-3">
                  <img class="inline-block h-14 w-14 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmFSwevP0kof-BLRkEgsyG3i1Q69B9chnqrbEb6L8&s" />
                  <div>
                     <h5 className=' text-gray-700 flex items-center gap-2'>Author Name</h5>
                     <p className='text-sm text-gray-400'>Published Date: 22 Dec 2022, 10:22 PM</p>
                  </div>
               </div>

            </div>

            <div className='flex gap-2 text-2xl mr-3 items-center'>
               <span><FaFacebook></FaFacebook></span>
               <span><FaYoutube></FaYoutube></span>
               <span><FaTwitter></FaTwitter></span>
               <span><FaShare></FaShare></span>
            </div>
         </div>
         <div className='my-6'>
            <hr />
         </div>
         <img src="https://new-media.dhakatribune.com/en/uploads/2022/12/12/dhaka-metro-rail-6.jpeg" alt="" />

         <div className='my-4'>
            <div className='flex flex-wrap  items-center'>
               <div className='flex flex-wrap items-center gap-3 my-3'>
                  <span><FaLocationArrow></FaLocationArrow></span>
                  <p className='text-gray-500'>Dhaka, Bangladesh</p>
               </div>

            </div>
         </div>
         <div >
            <hr />
         </div>

         <div >
            <p className='my-6'>
               The 22nd national council of ruling Awami League will be held in the capital on Saturday with Prime Minister Sheikh Hasina as its longest-serving president while the party saw eight chiefs and nine secretaries since its founding on June 23, 1949.  Sheikh Hasina has been serving as the longest serving president of Awami League, which led the country's 1971 Liberation War, for highest nine consecutive terms for the last four decades since her election to the position on February 16, 1981.  So far, 9 leaders served the Awami League as general secretary with Bangabandhu and Zillur Rahman serving in that position for the highest four terms each.  Bangabandhu Sheikh Mujibur Rahman became the party president on January 25, 1966 and steered the party for eight years till January 18, 1974.  The first party chief, Maulana Abdul Hamid Khan Bhasani served for seven years from June 23, 1949 to July 27, 1956. Shamsul Hoque was elected as general secretary while Sheikh Mujibur Rahman as joint general secretary.  Maulana Abdul Hamid Khan Bhasani and Bangabandhu Sheikh Mujibur Rahman were elected president and general secretary respectively in the Awami League's second council held in 1953.  Third council was held in 1955 and Maulana Abdul Hamid Khan Bhasani and Sheikh Mujibur Rahman were reelected president and general secretary.  Huseyn Shaheed Suhrawardy served as the acting party president for one year from July 27, 1956 to October 10, 1957.  Maulana Abdur Rashid Tarkabagish was elected as acting president and Bangabandhu Sheikh Mujibur Rahman was elected general secretary for the third time in the fourth council of Awami League held in 1957.  Maulana Abdur Rashid Tarkabagish was elected as president and Bangabandhu Sheikh Mujibur Rahman was elected general secretary for the fourth time in fifth council of the party held in 1964.  The sixth council of Awami League held in 1966 was a historic one as it endorsed historic 6-point of Bangabandhu Sheikh Mujibur Rahman.  Bangabandhu Sheikh Mujibur Rahman was elected as Awami League president first time and Tajuddin Ahmad was elected as its general secretary.  The seventh council was held in 1968 and Bangabandhu was in jail in connection with Agartala conspiracy case. Bangabandhu Sheikh Mujibur Rahman and Tajuddin Ahmad were reelected as president and general secretary respectively of the party.  The eighth council of Awami League was held in 1970 and Bangabandhu Sheikh Mujibur Rahman and Tajuddin Ahmad were elected as president and general secretary respectively of the party again.  The ninth council was held in the independent Bangladesh in 1972 and Bangabandhu Sheikh Mujibur Rahman and Zillur Rahman were elected president and general secretary respectively of AL.  AHM Qamaruzzaman and Zillur Rahman were elected as president and general secretary respectively of AL in the 10th council held in 1974.  The 11th council was held in 1977 and Syeda Zohra Tajuddin was elected the party's convener. Abdul Malek Ukil and Abdur Razzak were elected president and general secretary respectively of Awami League in the 12th council held in 1978.  The 13th council was held in 1981 and it was a turning point for Awami League as around 4,000 councilors and delegates elected Sheikh Hasina as president while she was in exile. Abdur Razzak was elected as general secretary. Abdur Razzak resigned from the post in 1982 and Syeda Sajeda Chowdhury became acting general secretary.  The 14th council was held in 1987 and Sheikh Hasina and Syeda Sajeda Chowdhury were elected as president and general secretary respectively of the party.  Sheikh Hasina and Zillur Rahman were elected as president and general secretary respectively in the 15th council of the part held in 1992.  Sheikh Hasina and Zillur Rahman were elected president and general secretary respectively again in 16th council held in 1997.  The 17th council was held 2002 and Sheikh Hasina and Abdul Jalil were elected president and general secretary respectively.  Sheikh Hasina and Syed Ashraful Islam were elected as president and general secretary respectively of AL in 18th council held in 2007.  Both Sheikh Hasina and Syed Ashraful Islam were elected as president and general secretary respectively again in 19th council held in 2012.  The 20th council of Awami League was held in 2016 and Sheikh Hasina and Obaidul Quader were elected as president and general secretary respectively.  The 21st council was held on December 20-21 in 2009 at the historic Suhrawardy Udyan. Sheikh Hasina and Obaidul Quader were reelected as president and general secretary respectively in the council.
            </p>
         </div>

         <div className=' flex items-center flex-wrap justify-between'>
            <div className='flex items-center gap-3'>

               <span className='ml-4 text-2xl text-blue-800'><BiLike></BiLike></span>
               200
               <span className='ml-4 text-2xl text-red-700'><BiDislike></BiDislike></span>
               35
            </div>
            <div className='flex items-center gap-3'>
               <span className='text-2xl'><FaEye></FaEye></span> 50000

               <span>
                  <FaComment></FaComment>
               </span>

               <a
                  href="#"
                  className="text-sm font-medium text-gray-900  hover:underline dark:text-white"
               >
                  73 Comments
               </a>


            </div>
         </div>


         <div className='mt-8 '><hr /></div>
         <div className='my-8'>
            <h1 className='text-lg text-gray-500 pb-4 flex gap-2 items-center'><span> <FaComment></FaComment></span> Post a comment</h1>
            <div className='flex gap-2 items-center'>
               <Avatar rounded={true} />
               <TextInput
                  id="md"
                  type="text"
                  sizing="md"
                  className='w-full lg:w-7/12'
               />
               <Button size="sm" color="gray">

                  <BiSend className='mr-1'></BiSend> <span className='font-semibold'>Post</span>
               </Button>
            </div>

         </div>
         <div className='mb-6'><hr /></div>

         <Comment></Comment>
         <Button size="sm" color="gray" className='text-gray-600 my-8 mx-auto'>
            <FaAngleDown className='mr-1'></FaAngleDown> <span className='font-semibold'>Load More </span>
         </Button>

      </div>
   );
};

export default SinglePage;