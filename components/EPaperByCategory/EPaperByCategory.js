// import { useEffect, useState } from "react";
// import Loader from "../Shared/Loader/Loader";

// const EPaperByCategory = ({ editionid }) => {
//   const [ePaper, setEPaper] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedEPaper, setSelectedEPaper] = useState([]);
//   useEffect(() => {
//     if (editionid) {
//       fetch("http://localhost:5000/all-e-paper")
//         .then((res) => res.json())
//         .then((data) => {
//           const filterData = data.filter((data) => data?.alias == editionid);
//           setEPaper(filterData);
//           setLoading(false);
//         });
//     }
//   }, [editionid, loading]);
//   console.log(ePaper);
//   if (loading) {
//     return <Loader></Loader>;
//   }
//   return (
//     <div className="max-w-[1440px] w-[95%] mx-auto ">
//       <h1 className="text-3xl font-bold text-center">Read Our Daily E-Paper</h1>
//       <div className="flex gap-6">
//         <div className="w-[20%] border  ">
//           {ePaper.map((data) => (
//             <img
//               src={data.img}
//               alt=""
//               className="
//                border rounded"
//               key={data._id}
//               onClick={() => setSelectedEPaper(data?.img)}
//             />
//           ))}
//         </div>
//         <div className="w-[78%]">
//           {" "}
//           <div className="grid grid-cols-12 gap-4 w-full">
//             <div className="col-span-5 border ">
//               <h1 className="text-3xl font-bold text-center">
//                 This is Selected img
//               </h1>
//               <img src={selectedEPaper} alt="" />
//             </div>
//             <div className="col-span-7 border ">
//               <h1 className="text-3xl font-bold text-center">
//                 This is Image selection details
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EPaperByCategory;
import { useEffect, useState } from "react";
import Loader from "../Shared/Loader/Loader";

const EPaperByCategory = ({ editionid }) => {
  const [ePaper, setEPaper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEPaper, setSelectedEPaper] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedAreasImage, setSelectedAreasImage] = useState(null);
  console.log(selectedAreasImage);
  useEffect(() => {
    if (editionid) {
      fetch("http://localhost:5000/all-e-paper")
        .then((res) => res.json())
        .then((data) => {
          const filterData = data.filter((data) => data?.alias === editionid);
          setEPaper(filterData);
          setLoading(false);
        });
    }
  }, [editionid, loading]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto">
      <h1 className="text-3xl font-bold text-center">Read Our Daily E-Paper</h1>
      <div className="flex gap-6">
        <div className="w-[20%] border">
          {ePaper.map((data) => (
            <img
              src={data.img}
              alt=""
              className="border rounded cursor-pointer"
              key={data._id}
              onClick={() => {
                setSelectedEPaper(data);
                setSelectedArea(data.selectedArea);
              }}
            />
          ))}
        </div>
        <div className="w-[78%]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border">
              <h1 className="text-3xl font-bold text-center">
                This is Selected img
              </h1>
              <div className="relative">
                {selectedEPaper && (
                  <img
                    src={selectedEPaper.img}
                    alt=""
                    className="w-[700px] h-[1050px]"
                  />
                )}
                {selectedArea &&
                  selectedArea.map((area) => (
                    <div
                      onClick={() => setSelectedAreasImage(area)}
                      key={area.id}
                      className="absolute border hover:border-blue-500 cursor-pointer"
                      style={{
                        left: `${area.left}px`,
                        top: `${area.top}px`,
                        width: `${area.width}px`,
                        height: `${area.height}px`,
                      }}
                    ></div>
                  ))}
              </div>
            </div>
            {/* final section selected aria */}
            <div className="col-span-7 border">
              <h1 className="text-3xl font-bold text-center">
                This is Image selection area image
              </h1>
              {selectedAreasImage && selectedEPaper && (
                <div
                  className="relative "
                  style={{
                    width: `${selectedAreasImage.width}px`,
                    height: `${selectedAreasImage.height}px`,
                  }}
                >
                  <img
                    src={selectedEPaper.img}
                    alt=""
                    style={{
                      position: "absolute",
                      left: `-${selectedAreasImage.left}px`,
                      top: `-${selectedAreasImage.top}px`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPaperByCategory;
