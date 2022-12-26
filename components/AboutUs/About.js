import { Carousel } from 'flowbite-react';
import React from 'react';

const About = () => {
    return (
        <div className='  max-w-[1440px] w-[95%] mx-auto min-h-screen'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuyncEG_WhNdwiAevmgN9WD0nmb4UZ6b9-A&usqp=CAU"
                        alt="..."
                    />
                    <img
                        src="https://bucket.barta24.com/uploads/news/2019/Mar/26/1553570784207.jpg"
                        alt="..."
                    />
                    <img
                        src="https://www.jugantor.com/assets/news_photos/2021/09/13/image-464422-1631490837.jpg"
                        alt="..."
                    />
                    <img
                        src="https://static.dw.com/image/56982930_605.jpg"
                        alt="..."
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYCzsdHo7IrfkWHvg2Fy7lNawVXhjKExa90g&usqp=CAU"
                        alt="..."
                    />
                </Carousel>

                <div className=' my-4'>
                    <h1 className='font-bold my-2'>About News-71</h1>
                    <p>
                        The 24/7 news publisher draws on the resources of over 500 journalists and photographers around Bangladesh and beyond. For over a decade now, it has brought accurate news and unique insights to a widely dispersed audience.
                    </p>
                    <h1 className='font-bold my-2'>Our Team</h1>
                    <p>
                        Currently we are making the online project for learning new technology and more experience.

                    </p>
                    <h1 className='font-bold my-2'> Team Member</h1>
                    <p>Our four team member with team leader.</p>
                    <h1 className='font-bold my-2'> our target</h1>
                    <p>We want to make useful and more functionalities a newspaper so that a uses can use easily. also We will ensure that a user gets the maximum benefit.

                    
                      

                    </p>


                </div>
                <div className='mb-32'>
                </div>
            </div>
        </div>
    );
};

export default About;