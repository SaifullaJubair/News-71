import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader/Loader";

const SearchNews = () => {
  const router = useRouter();
  const { text } = router.query;

  const [allNews, setAllNews] = useState(null);

  useEffect(() => {
    // const newName = text?.charAt(0)?.toUpperCase() + text?.slice(1);
    fetch(`http://localhost:5000/news/search/${text}`)
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, [text]);

  return (
    <div>
      {allNews ? (
        <div>
          <div className="max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7">
            <div className="w-full">
              <h2 className="title uppercase py-4 text-center mb-10 bg-blue-400 text-black text-2xl font-semibold w-full">
                {" "}
                All news from :{" "}
                <span className="font-bold text-red-600">{text}</span>
              </h2>

              {allNews.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {allNews?.map((news) => (
                    <Link
                      href={`/news/view/${news._id}`}
                      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 shadow-lg p-2"
                    >
                      <img src={news?.img} className="w-full h-full" alt="" />
                      <div className="md:col-span-2 flex flex-col gap-4">
                        <h2 className="font-bold text-lg">{news?.heading}</h2>
                        <p>
                          {" "}
                          {news?.details?.length > 300
                            ? `${news?.details.slice(0, 300)}...`
                            : news?.details}
                        </p>
                        <div className="flex gap-6 flex-wrap">
                          <div>
                            <p>
                              {" "}
                              <span className="font-bold">
                                Author Name:
                              </span>{" "}
                              {news.authorName}
                            </p>
                            <p>
                              <span className="font-bold">CreateAT:</span>{" "}
                              {news.createdAt}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="font-bold">Total Likes:</span>{" "}
                              {news.total_likes}
                            </p>
                            <p>
                              <span className="font-bold">Total Dislikes:</span>{" "}
                              {news.total_dislikes}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="font-bold">Rating:</span>{" "}
                              {news.rating}
                            </p>
                            <p>
                              <span className="font-bold">Total Views:</span>{" "}
                              {news.total_view}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="font-bold">Category name:</span>{" "}
                              {news.category_id}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center my-5 font-bold text-lg">
                  No news found
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default SearchNews;
