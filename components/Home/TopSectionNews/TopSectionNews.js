import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const TopSectionNews = () => {
  const [latestNews, setLatestNews] = useState(null);
  const [allLatestNews, setAllLatestNews] = useState(null);
  const [firstLatestNews, setFirstLatestNews] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/latestnews")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.length > 0) {
          setFirstLatestNews(data[0]);
          if (data?.length > 2) {
            setLatestNews(data.slice(0, 2));
          } else {
            setLatestNews(data);
          }
        }

        setAllLatestNews(data);
      });
  }, []);

  // console.log(firstLatestNews);

  return (
    <div className="max-w-[1440px]  mx-auto">
      <div className="grid lg:grid-cols-4 gap-6 md:gird-cols-3 grid-cols-2   my-4">
        {/*  breaking news*/}
        <div className="col-span-2 ">
          <div className=" ">
            {/* <p className="text-sm  flex gap-2 items-center text-gray-700 my-3">
              <FaRegClock /> {firstLatestNews?.createdAt}
            </p> */}
            <h1 className="text-xl font-bold my-2 md:max-w-lg w-full ">
              {firstLatestNews?.heading}
            </h1>
            <img
              src={firstLatestNews?.img}
              alt=""
              className="w-full h-96 rounded"
            />
            <div className="grid grid-cols-2 gap-2  my-2">
              {latestNews?.map((news) => (
                <div className="col-span-1" key={news._id}>
                  <p className="text-sm  flex gap-2 items-center text-gray-700 my-3">
                    <FaRegClock /> {news?.createdAt}
                  </p>
                  <h1 className=" font-bold my-2 md:max-w-lg w-full mb-3 mt-1 text-gray-700">
                    {news?.heading}
                  </h1>
                  <p className="  my-2 md:max-w-lg w-full  mt-1 text-gray-600">
                    {news?.details.length > 150
                      ? news?.details.slice(0, 150) + "..."
                      : news?.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Latest news */}
        <div className="grid grid-cols-1 gap-4 ">
          <div className="  max-h-[70vh] overflow-y-auto scrollbar-thin  scrollbar-track-gray-50 scrollbar-thumb-green-500  ">
            <h1 className="text-lg font-bold  text-white bg-[#0F824A] rounded p-2 pl-4 sticky mb-2 top-0 z-50">
              সর্বশেষ
            </h1>
            {allLatestNews?.map((news) => (
              <div
                className="  "
                key={news?._id}
                // dangerouslySetInnerHTML={{ __html: news?.details }}
              >
                <p className="text-sm  flex gap-2 items-center text-gray-700 my-3">
                  <FaRegClock /> {news?.createdAt}
                </p>
                <h1 className=" font-bold my-2 md:max-w-lg w-full mb-3 mt-1 text-gray-700">
                  {news?.heading}
                </h1>
                <p className="  my-2 md:max-w-lg w-full  mt-1 text-gray-600">
                  {news?.details.length > 150
                    ? news?.details.slice(0, 150) + "..."
                    : news?.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/*  top news*/}
        <div className="grid grid-cols-1 gap-4 ">
          <div className="  ">
            <h1 className="text-lg font-bold  text-white bg-[#0F824A] rounded mb-2 p-2 pl-4">
              টপ নিউজ
            </h1>
            <img src={firstLatestNews?.img} alt="" className="w-full rounded" />
            <p className="text-sm  flex gap-2 items-center text-gray-700 my-3">
              <FaRegClock /> {firstLatestNews?.createdAt}
            </p>
            <h1 className="font-bold my-2 md:max-w-lg w-full ">
              {firstLatestNews?.heading}
            </h1>
            <p className="  my-2 md:max-w-lg w-full  mt-1 text-gray-600">
              {firstLatestNews?.details.length > 150
                ? firstLatestNews?.details.slice(0, 150) + "..."
                : firstLatestNews?.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSectionNews;
