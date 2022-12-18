import Link from "next/link";

const InternationalNews = () => {
    return (
        <div className=" p-6  ">
            <h2 className="text-xl font-bold mb-5"> International News</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-1  ">
                    <div className="my-3">
                        <h2 className="text-lg font-semibold "><span className="underline decoration-rose-800 underline-offset-8 decoration-2">Jap</span>an</h2>

                        <div className="mt-3 ">
                            <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src="https://gumlet.assettype.com/bdnews24%2F2022-08%2F45c97ce9-91d9-4a8f-8eeb-5da0c397be79%2Fawami_league_party_office_220618_0015.jpg?" alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">123..Boat rebel candidates 'getting pardon'</h2>

                            </Link>

                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2  mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max- mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>
                        </div>
                    </div>
                    <div className="my-3">
                        <h2 className="text-lg font-semibold "><span className="underline decoration-rose-800 underline-offset-8 decoration-2">Ind</span>ia</h2>

                        <div className="mt-3">
                            <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src="https://gumlet.assettype.com/bdnews24%2F2022-08%2F45c97ce9-91d9-4a8f-8eeb-5da0c397be79%2Fawami_league_party_office_220618_0015.jpg?" alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max-w-96 mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max- mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>
                        </div>
                    </div>
                    <div className="my-3">
                        <h2 className="text-lg font-semibold "><span className="underline decoration-rose-800 underline-offset-8 decoration-2">Ca</span>nada</h2>

                        <div className="mt-3">
                            <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src="https://gumlet.assettype.com/bdnews24%2F2022-08%2F45c97ce9-91d9-4a8f-8eeb-5da0c397be79%2Fawami_league_party_office_220618_0015.jpg?" alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max-w-96 mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max- mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>
                        </div>
                    </div>
                    <div className="my-3">
                        <h2 className="text-lg font-semibold "><span className="underline decoration-rose-800 underline-offset-8 decoration-2">Ameri</span>ca</h2>

                        <div className="mt-3">
                            <Link href={'/'}>

                                <img className="rounded flex justify-center items-center w-96" src="https://gumlet.assettype.com/bdnews24%2F2022-08%2F45c97ce9-91d9-4a8f-8eeb-5da0c397be79%2Fawami_league_party_office_220618_0015.jpg?" alt="" />
                                <h2 className="border-b-2 border-gray-400 pb-3  text-xl font-semibold my-2 mx-1 ">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max-w-96 mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <Link href={'/'} className=''>
                                <h2 className="border-b-2 pb-3 border-gray-400 text-xl font-semibold my-2 max- mx-1">Boat rebel candidates 'getting pardon'</h2>

                            </Link>
                            <button className="px-4 text-center py-2 bg-blue-700 rounded-md max-w-96 mx-1">More +</button>
                        </div>
                    </div>







                </div>
            </div>
        </div>
    );
};

export default InternationalNews;