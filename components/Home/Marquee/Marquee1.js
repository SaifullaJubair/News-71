import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquee1 = () => {
    return (
       <div className='flex'>
        <div className='bg-black text-white px-4 rounded-sm flex justify-center items-center'>
            <h2>Latest</h2>
        </div>
         <div
            style={{
                width: '100%',
                // whiteSpace: 'wrap',
                color: 'green',
               
                border: '1px',
               
                borderColor: 'black',
                borderStyle: 'solid'
                
            }}
        >
            <Marquee>
                <p className='bg-pink- my-1 py-1  '>  “লড়াই আর বিশ্বাস নিয়ে আমরা এখনো আছি; একসঙ্গে আরও একটা রাত।</p> <Link href='/login'>.....Login</Link>
            </Marquee>

        </div>
       </div>
    );
};

export default Marquee1;