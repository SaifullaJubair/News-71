import React from 'react';
import RightBar from '../../components/RightBar/RightBar';
import SinglePage from '../../components/SinglePage/SinglePage';

const singlePage = () => {
   return (
      <div className='mt-[150px] max-w-[1440px] w-[95%] mx-auto border-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
         <div className='lg:col-span-3 md:col-span-2 col-span-1 border-2'>
            <SinglePage></SinglePage>
         </div>

         <div>
            <RightBar></RightBar>
         </div>
      </div>
   );
};

export default singlePage;