import { Carousel } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
const LatestNews = () => {
  const [newes, setNews] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/latestnews")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setNews(data);
      });
  }, []);

  return (
    <div className="h-[500px] mt-12">
      <h1 className="text-3xl font-bold mb-8 bg-green-50 p-3 sticky top-12 z-50">
        Latest News
      </h1>

      <Carousel>
        {newes?.map((news) => (
          <div
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-900 dark:text-white  "
            style={{
              background: `linear-gradient(102deg, #151515eb 15%, rgba(10, 10, 10, 0) 100%) , url(${news?.img})`,
              // backgroundImage: `url(${news?.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Link href={`/news/view/${news?._id}`}>
              <p className="font-bold text-4xl px-6 mt-6 text-white">
                {" "}
                {news?.heading}
              </p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
