import { useRouter } from "next/router";
import { useState } from "react";
import EditionNews from "../../../components/Dashboard/EditionNews/EditionNews";
import Loader from "../../../components/Shared/Loader/Loader";

const Edition = () => {
  const router = useRouter();
  const { editionid } = router.query;
  //   const [editionId, setNewsId] = useState(editionid);
  console.log(editionid);

  return (
    <div>
      {editionid ? (
        <EditionNews editionid={editionid}></EditionNews>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default Edition;
