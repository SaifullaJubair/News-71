import next from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import RightBar from "../../../components/RightBar/RightBar";
import Loader from "../../../components/Shared/Loader/Loader";
import SinglePage from "../../../components/SinglePage/SinglePage";
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const singlePage = () => {
  const router = useRouter();
  let { newsid } = router.query;
  console.log(router);
  console.log(newsid);
  const [categoryNewes, setCategoryNews] = useState([]);
  const [newsRefetch, setNewsRefetch] = useState(false);
  const [id, setId] = useState(newsid);

  useEffect(() => {
    setId(newsid);
  }, [newsid, newsRefetch]);

  const rightClick = (newId) => {
    // console.log(href={`/news/view/${category._id}`})
    console.log(newId);
    router.push(`/news/view/${newId}`);
    setId(newId);
    setNewsRefetch(!newsRefetch);
  };

  return (
    <div>
      <Helmet>
        <title>News Details</title>
      </Helmet>
      {id ? (
        <div className="mt-[150px] max-w-[1440px] w-[95%] mx-auto gap-8 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="lg:col-span-3 md:col-span-2 col-span-1 mx-auto ">
            <SinglePage
              setCategoryNews={setCategoryNews}
              id={newsid}
              newsRefetch={newsRefetch}
            ></SinglePage>
          </div>

          <div>
            <RightBar
              categoryNewes={categoryNewes}
              rightClick={rightClick}
            ></RightBar>
          </div>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default singlePage;
