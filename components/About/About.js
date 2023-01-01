import { Card, Dropdown } from 'flowbite-react';

import ContactUs from '../ContactUs/ContactUs';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';


const aboutUs = [
    {
        name: 'Saifullah Jubayer', img: 'https://i.ibb.co/vjRmyGh/saifulla-png.png', portfolio: 'https://github.com/SaifullaJubair/News-71', position: 'Web developer', mobile: '+880 1923868397'
        , email: 'exaple@gmail.com'
    },
    {
        name: 'Gulam Mostafa', img: 'https://i.ibb.co/9H2vd4H/MD-GULAM-MOSTAFA300-X300.jpg', portfolio: 'https://github.com/SaifullaJubair/News-71', position: 'Web developer', mobile: '018100000'
        , email: 'exaple@gmail.com'
    },
    {
        name: 'Md Zahirul Islam', img: 'https://i.ibb.co/kQbcr42/Capture.jpg', portfolio: 'https://i.ibb.co/kQbcr42/Capture.jpg', position: 'Web developer', mobile: '018100000'
        , email: 'exaple@gmail.com'
    },
    {
        name: 'Inzamam nur', img: 'https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/320778504_487931706768365_536983594641599591_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1bhVLHP21WYAX-aVd0O&_nc_ht=scontent.fjsr6-1.fna&oh=00_AfCuxeXrvG_QNqO5PyENwBgqMYRY7JjqveBnOdijQ1za6w&oe=63B51DDC', portfolio: 'https://github.com/SaifullaJubair/News-71', position: 'Web developer', mobile: '018100000', email: 'exaple@gmail.com'
    },
]



const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex justify-center items-center max-w-[1440px] w-[95%] mx-auto'>
            <div className='w-8/12 lg:w-full'>
                <h2 className='mt-32 text-center text-2xl font-semibold'>Our Team Member</h2>
                <div className='m-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-4 mb-8 w-full items-center justify-center'>

                    {
                        aboutUs.map(about => <div className=" mb-8 w-full ">
                            <Card>

                                <div className="flex flex-col items-center pb-10">
                                    <img
                                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                        src={about.img}
                                        alt="Bonnie image"
                                    />
                                    <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                                        {about.name}
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {about.position}
                                    </span>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={about.portfolio}
                                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                        >
                                            Portfolio
                                        </a>

                                    </div>
                                    <div className="mt-4 flex space-x-3 lg:mt-6">
                                        <a
                                            href={`mailto:${about.email}`}
                                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                        >
                                            <AiOutlineMail />
                                        </a>
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=${about.mobile}`}
                                            target="_blank"
                                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                        >
                                            <AiOutlineWhatsApp />
                                        </a>

                                    </div>
                                </div>
                            </Card>
                        </div>)
                    }

                </div>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default About;