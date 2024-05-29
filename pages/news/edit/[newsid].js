import { useRouter } from "next/router";
import React, { useState } from "react";
import EditNews from "../../../components/Dashboard/EditNews/EditNews";
import Loader from "../../../components/Shared/Loader/Loader";

const Edit = () => {
  const router = useRouter();
  const { newsid } = router.query;
  //   const [newsId, setNewsId] = useState(newsid);

  return (
    <div>
      {newsid ? <EditNews newsid={newsid}></EditNews> : <Loader></Loader>}
    </div>
  );
};

export default Edit;
