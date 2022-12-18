import Link from "next/link";

const LifeStyleNews = () => {
    return (
        <div className="my-10 font-poppins ">
            <div className="container mx-auto px-4 ">
                <h1 className="text-3xl font-bold">LifeStyle</h1>
                <hr className="border-red-500 mt-1" />
            </div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 px-4 mx-auto md:grid-cols-4">
                    {/* <img
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          /> */}

                    <Link href='#' >
                        <div class=" w-full rounded overflow-hidden shadow-lg">
                            <img
                                src="https://source.unsplash.com/random/200x200/?7"
                                className="w-full"
                                alt=""
                            />
                            <div class="py-3">
                                <div class="font-bold text-xl mb-2">
                                    New app "DuiLingo" helps students talk to professors without
                                    offending them
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div class=" w-full rounded overflow-hidden shadow-lg">
                        <img
                            src="https://source.unsplash.com/random/200x200/?7"
                            className="w-full"
                            alt=""
                        />
                        <div class="py-3">
                            <div class="font-bold text-xl mb-2">
                                8 essential work-from-home apps to make your life easier
                            </div>
                        </div>
                    </div>
                    <div class=" w-full rounded overflow-hidden shadow-lg">
                        <img
                            src="https://source.unsplash.com/random/200x200/?7"
                            className="w-full"
                            alt=""
                        />
                        <div class="py-3">
                            <div class="font-bold text-xl mb-2">
                                6 ways to be productive at work
                            </div>
                        </div>
                    </div>
                    <div class=" w-full rounded overflow-hidden shadow-lg">
                        <img
                            src="https://source.unsplash.com/random/200x200/?7"
                            className="w-full"
                            alt=""
                        />
                        <div class="py-3">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        </div>
                    </div>
                    <Link href='#' className="col-span-2 row-span-2
           md:col-start-1 md:row-start-1 shadow-md "  >
                        <div class=" w-full rounded overflow-hidden ">
                            <img
                                src="https://source.unsplash.com/random/200x200/?7"
                                className="w-full"
                                alt=""
                            />
                            <div class="py-3">
                                <div class="font-bold text-2xl mb-2">
                                    Int'l Migrants Day: with dreams departed, they come home dead
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                                    vitae aperiam cum cupiditate nesciunt nam, sapiente ratione
                                    provident saepe non porro. Autem praesentium repellendus
                                    repellat nobis quis suscipit consequatur nostrum!
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LifeStyleNews;
