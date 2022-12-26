import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

const InternationalNews = () => {
    const [russia, setRussia] = useState([])
    const [beijing, setBeijing] = useState([])
    const [ukraine, setUkraine] = useState([])
    const [japan, setJapan] = useState([])
    console.log(ukraine)
    const { data: internationals = [], } = useQuery({
        queryKey: ['internationals'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/news/International?length=12`);
            const data = await res.json();
            let r = []
            let u = []
            let j = []
            let b = []
            data.map(news => {
                if (news.location === 'Russia') {
                    r.push(news)
                }
                if (news.location === 'Ukerine') {
                    u.push(news)
                }
                if (news.location === 'Japan') {
                    j.push(news)
                }
                if (news.location === 'Beijing') {
                    b.push(news)
                }
            })
            setRussia(r)
            setJapan(j)
            setBeijing(b)
            setUkraine(u)

            return data;
        }
    })

    console.log(internationals)

    return (
        <div className=" ">
            <h2 className="text-xl font-bold mb-5"> International News</h2>
            <div className="flex justify-center g">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4  ">
                    <div className="shadow-md shadow-slate-500">
                        <h2 className="text-lg font-semibold ml-3 ">{'Ukraine'}</h2>
                        {
                            ukraine.map(inter => <div className="my-3">

                                <div className="mt-3 ">
                                    {/* <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src={inter.img} alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">{inter.heading?.slice(0,50)}...</h2>

                            </Link> */}
                                    <img className="rounded flex justify-center items-center   h-60 w-96" src={inter.img} alt="" />

                                    <Link href={'/'} className=''>
                                        <h2 className="border-b-2 pb-2 border-gray-400 text-xl font-semibold my-2  mx-1 p">{inter.heading?.slice(0, 50)}...</h2>

                                    </Link>

                                </div>
                            </div>)
                        }

                        <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>

                    </div>
                    <div className="shadow-md shadow-slate-500">
                        <h2 className="text-lg font-semibold ml-3 ">{'Russia'}</h2>
                        {
                            russia.map(inter => <div className="my-3">

                                <div className="mt-3 ">
                                    {/* <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src={inter.img} alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">{inter.heading?.slice(0,50)}...</h2>

                            </Link> */}
                                    <img className="rounded flex justify-center items-center   h-60 w-96" src={inter.img} alt="" />

                                    <Link href={'/'} className=''>
                                        <h2 className="border-b-2 pb-2 border-gray-400 text-xl font-semibold my-2  mx-1">{inter.heading?.slice(0, 50)}...</h2>

                                    </Link>

                                </div>
                            </div>)
                        }

                        <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>

                    </div>
                    <div className="shadow-md shadow-slate-500">
                        <h2 className="text-lg font-semibold ml-3  ">{'Beijing'}</h2>
                        {
                            beijing.map(inter => <div className="my-3">

                                <div className="mt-3 ">
                                    {/* <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src={inter.img} alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">{inter.heading?.slice(0,50)}...</h2>

                            </Link> */}
                                    <img className="rounded flex justify-center items-center   h-60 w-96" src={inter.img} alt="" />

                                    <Link href={'/'} className=''>
                                        <h2 className="border-b-2 pb-2 border-gray-400 text-xl font-semibold my-2  mx-1">{inter.heading?.slice(0, 50)}...</h2>

                                    </Link>

                                </div>
                            </div>)
                        }

                        <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>

                    </div>
                    <div className="shadow-md shadow-slate-500">
                        <h2 className="text-lg font-semibold ml-3 ">{'Japan'}</h2>
                        {
                            japan.map(inter => <div className="my-3">

                                <div className="mt-3 ">
                                    {/* <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src={inter.img} alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">{inter.heading?.slice(0,50)}...</h2>

                            </Link> */}
                                    <img className="rounded flex justify-center items-center   h-60 w-96" src={inter.img} alt="" />

                                    <Link href={'/'} className=''>
                                        <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2  mx-1">{inter.heading?.slice(0, 50)}...</h2>

                                    </Link>

                                </div>
                            </div>)
                        }

                        <button className="px-4 text-center py-2 mb-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>

                    </div>







                </div>
            </div>
        </div>
    );
};

export default InternationalNews;