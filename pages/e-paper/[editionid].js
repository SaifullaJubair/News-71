import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "../../components/Shared/Loader/Loader";
import EPaperByCategory from "../../components/EPaperByCategory/EPaperByCategory";

const Edition = () => {
  const router = useRouter();
  const { editionid } = router.query;
  //   const [editionId, setNewsId] = useState(editionid);
  console.log(editionid);

  return (
    <div>
      {editionid ? (
        <EPaperByCategory editionid={editionid}></EPaperByCategory>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default Edition;
