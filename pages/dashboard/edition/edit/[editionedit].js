import { useRouter } from "next/router";
import { useState } from "react";
import EditionEPageEdit from "../../../../components/Dashboard/EditionEPageEdit/EditionEPageEdit";
import Loader from "../../../../components/Shared/Loader/Loader";

const EditionEditPage = () => {
  const router = useRouter();
  const { editionedit } = router.query;
  //   const [editionId, setNewsId] = useState(editionid);
  console.log(editionedit);

  return (
    <div>
      {editionedit ? (
        <EditionEPageEdit editionid={editionedit}></EditionEPageEdit>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

export default EditionEditPage;
