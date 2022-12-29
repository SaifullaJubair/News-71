import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
    return (
        <div className='flex mt-8'>
            <div className='bg-blue-900 text-white font-bold px-4 flex justify-center items-center'>
                <h2>Latest</h2>
            </div>
            <div className=' bg-blue-900'>
                <Marquee speed={70} pauseOnHover gradientColor>
                    <p className=' text-white font-bold my-1 py-1  '>   Bangladesh to hire 68,390 teachers for private institutions | SSC exams in 2023 will be held by the end of April | Pant, Iyer partnership helps India close in on Bangladesh | India in command after Umesh and Ashwin wreck Bangladesh...  </p>
                </Marquee>

            </div>
        </div>
    );
};

export default Marquee1;