import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDoubleRight, FaArrowCircleRight } from "react-icons/fa";

const InternationalNews = () => {
  const [russia, setRussia] = useState([]);
  const [beijing, setBeijing] = useState([]);
  const [ukraine, setUkraine] = useState([]);
  const [japan, setJapan] = useState([]);
  // console.log(ukraine)
  const { data: internationals = [] } = useQuery({
    queryKey: ["internationals"],

    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/news/International?length=12`
      );
      const data = await res.json();
      let r = [];
      let u = [];
      let j = [];
      let b = [];
      console.log(data);
      data.map((news) => {
        if (news.location === "Russia") {
          r.push(news);
        }
        if (news.location === "Ukerine") {
          u.push(news);
        }
        if (news.location === "Japan") {
          j.push(news);
        }
        if (news.location === "Beijing") {
          b.push(news);
        }
      });
      setRussia(r);
      setJapan(j);
      setBeijing(b);
      setUkraine(u);

      return data;
    },
  });

  // console.log(newsnationals)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5"> International News</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5  ">
          <div className="shadow-md p-3">
            <h2>
              {" "}
              <span className="font-semibold text-lg">{"Ukraine"}'s</span> top
              News
            </h2>
            {ukraine.map((news) => (
              <div className="my-3 w-full duration-300 hover:-translate-y-2">
                <Link href={`/news/view/${news?._id}`} className="">
                  <div className="mt-3 ">
                    <img
                      className="rounded flex justify-center items-center   h-52 w-full"
                      src={news.img}
                      alt=""
                    />

                    <h2 className="border-b py-4 border-gray-300 ">
                      {news.heading?.slice(0, 80)}...
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
            <Button>
              <span className="mr-1"> More</span>{" "}
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </Button>
          </div>
          <div className="shadow-md p-3">
            <h2>
              <span className="font-semibold text-lg">{"Russia"}'s</span> top
              News
            </h2>
            {russia.map((news) => (
              <div className="my-3 duration-300 hover:-translate-y-2">
                <Link href={`/news/view/${news?._id}`} className="">
                  <div className="mt-3 ">
                    <img
                      className="rounded flex justify-center items-center   h-52 w-full"
                      src={news.img}
                      alt=""
                    />

                    <h2 className="border-b py-4 border-gray-300 ">
                      {news.heading?.slice(0, 80)}...
                    </h2>
                  </div>
                </Link>
              </div>
            ))}

            <Button>
              <span className="mr-1"> More</span>{" "}
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </Button>
          </div>
          <div className="shadow-md p-3 ">
            <h2>
              <span className="font-semibold text-lg">{"Beijing"} 's</span> top
              News
            </h2>
            {beijing.map((news) => (
              <div className="my-3 duration-300 hover:-translate-y-2">
                <Link href={`/news/view/${news?._id}`} className="">
                  <div className="mt-3 ">
                    <img
                      className="rounded flex justify-center items-center   h-52 w-full"
                      src={news.img}
                      alt=""
                    />

                    <h2 className="border-b py-4 border-gray-300 ">
                      {news.heading?.slice(0, 80)}...
                    </h2>
                  </div>
                </Link>
              </div>
            ))}

            <Button>
              <span className="mr-1"> More</span>{" "}
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </Button>
          </div>
          <div className="shadow-md p-3">
            <h2>
              <span className="font-semibold text-lg">{"Japan"}'s</span> top
              News
            </h2>
            {japan.map((news) => (
              <div className="my-3 duration-300 hover:-translate-y-2">
                <Link href={`/news/view/${news?._id}`} className="">
                  <div className="mt-3 ">
                    <img
                      className="rounded flex justify-center items-center   h-52 w-full"
                      src={news.img}
                      alt=""
                    />

                    <h2 className="border-b py-4 border-gray-300 ">
                      {news.heading?.slice(0, 80)}...
                    </h2>
                  </div>
                </Link>
              </div>
            ))}

            <Button>
              <span className="mr-1"> More</span>{" "}
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalNews;
