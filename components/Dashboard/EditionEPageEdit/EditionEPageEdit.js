// import React, { useEffect, useState } from "react";

// const EditionEPageEdit = ({ editionid }) => {
//   console.log(editionid);

//   const [imgData, setImgData] = useState({});
//   useEffect(() => {
//     if (editionid) {
//       fetch(`http://localhost:5000/edition-single-news-page/${editionid}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setImgData(data);
//         });
//     }
//   }, [editionid]);
//   console.log(imgData);
//   return (
//     <div className="max-w-[1440px] w-[95%] mx-auto">
//       <h1 className="text-center text-2xl font-semibold">
//         This is Edition E Paper Edit Page
//       </h1>

//       <div className="flex flex-col items-center justify-center my-6">
//         <div className=" mx-auto">
//           <button className="bg-green-400 font-semibold text-white hover:bg-green-500 duration-200 px-4 py-2 rounded border">
//             Select Area
//           </button>
//           <img src={imgData?.img} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditionEPageEdit;
// import React, { useEffect, useState } from "react";
// import { ImageMap } from "@qiuz/react-image-map";

// const EditionEPageEdit = ({ editionid }) => {
//   const [imgData, setImgData] = useState({});
//   const [mapAreas, setMapAreas] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [currentArea, setCurrentArea] = useState(null);

//   useEffect(() => {
//     if (editionid) {
//       fetch(`http://localhost:5000/edition-single-news-page/${editionid}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setImgData(data);
//         });
//     }
//   }, [editionid]);

//   const handleMouseDown = (event) => {
//     const { offsetX, offsetY } = event.nativeEvent;
//     setIsDrawing(true);
//     setCurrentArea({
//       left: offsetX,
//       top: offsetY,
//       width: 0,
//       height: 0,
//     });
//   };

//   const handleMouseMove = (event) => {
//     if (!isDrawing) return;
//     const { offsetX, offsetY } = event.nativeEvent;
//     setCurrentArea((prevArea) => ({
//       ...prevArea,
//       width: offsetX - prevArea.left,
//       height: offsetY - prevArea.top,
//     }));
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);
//     if (currentArea) {
//       setMapAreas([...mapAreas, currentArea]);

//       // Post the selected area to the server
//       fetch(`http://localhost:5000/edition-single-news-page/${editionid}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(currentArea),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("Area saved:", data);
//         })
//         .catch((error) => {
//           console.error("Error saving area:", error);
//         });
//     }
//     setCurrentArea(null);
//   };

//   return (
//     <div className="max-w-[1440px] w-[95%] mx-auto">
//       <h1 className="text-center text-2xl font-semibold">
//         This is Edition E Paper Edit Page
//       </h1>

//       <div className="flex flex-col items-center justify-center my-6">
//         <div
//           className="relative"
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//         >
//           <img
//             src={imgData?.img}
//             alt="E-Paper"
//             className="w-full border cursor-crosshair"
//           />
//           {mapAreas.map((area, index) => (
//             <div
//               key={index}
//               style={{
//                 position: "absolute",
//                 left: area.left,
//                 top: area.top,
//                 width: area.width,
//                 height: area.height,
//                 border: "2px solid red",
//               }}
//             />
//           ))}
//           {currentArea && (
//             <div
//               style={{
//                 position: "absolute",
//                 left: currentArea.left,
//                 top: currentArea.top,
//                 width: currentArea.width,
//                 height: currentArea.height,
//                 border: "2px solid blue",
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditionEPageEdit;

// import React, { useEffect, useState } from "react";
// import { ImageMap } from "@qiuz/react-image-map";
// import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

// const EditionEPageEdit = ({ editionid }) => {
//   const [imgData, setImgData] = useState({});
//   const [mapAreas, setMapAreas] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [currentArea, setCurrentArea] = useState(null);
//   const [editArea, setEditArea] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (editionid) {
//       fetch(`http://localhost:5000/edition-single-news-page/${editionid}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setImgData(data);
//           setMapAreas(
//             Array.isArray(data.selectedArea) ? data.selectedArea : []
//           );
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setMapAreas([]);
//         });
//     }
//   }, [editionid]);

//   const handleMouseDown = (event) => {
//     const { offsetX, offsetY } = event.nativeEvent;
//     setIsDrawing(true);
//     setCurrentArea({
//       id: mapAreas.length + 1, // unique ID
//       left: offsetX,
//       top: offsetY,
//       width: 0,
//       height: 0,
//       serialId: "",
//     });
//   };

//   const handleMouseMove = (event) => {
//     if (!isDrawing) return;
//     const { offsetX, offsetY } = event.nativeEvent;
//     setCurrentArea((prevArea) => ({
//       ...prevArea,
//       width: offsetX - prevArea.left,
//       height: offsetY - prevArea.top,
//     }));
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);
//     if (currentArea) {
//       setMapAreas([...mapAreas, currentArea]);
//     }
//     setCurrentArea(null);
//   };

//   const handleSave = () => {
//     const dataToSave = {
//       ...imgData,
//       selectedArea: mapAreas,
//     };

//     fetch(`http://localhost:5000/edition-single-news-page/${editionid}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(dataToSave),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Area saved:", data);
//       })
//       .catch((error) => {
//         console.error("Error saving area:", error);
//       });
//   };

//   const handleEdit = (area) => {
//     setEditArea(area);
//     setShowModal(true);
//   };

//   const handleDelete = (areaId) => {
//     setMapAreas(mapAreas.filter((area) => area.id !== areaId));
//   };

//   const handleModalSave = () => {
//     setMapAreas(
//       mapAreas.map((area) => (area.id === editArea.id ? editArea : area))
//     );
//     setShowModal(false);
//   };

//   return (
//     <div className="max-w-[1440px] w-[95%] mx-auto">
//       <h1 className="text-center text-2xl font-semibold">
//         This is Edition E Paper Edit Page
//       </h1>

//       <div className="flex flex-col items-center justify-center my-6">
//         <div
//           className="relative"
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//         >
//           <img src={imgData?.img} alt="E-Paper" className="w-full" />
//           {Array.isArray(mapAreas) &&
//             mapAreas.map((area, index) => (
//               <div
//                 key={index}
//                 style={{
//                   position: "absolute",
//                   left: area.left,
//                   top: area.top,
//                   width: area.width,
//                   height: area.height,
//                   border: "2px solid red",
//                 }}
//               >
//                 <div className="absolute top-0 right-0 flex space-x-1 bg-white">
//                   <button onClick={() => handleEdit(area)} className="p-1">
//                     <FaEdit />
//                   </button>
//                   <button onClick={() => handleDelete(area.id)} className="p-1">
//                     <FaTrash />
//                   </button>
//                   <button onClick={handleSave} className="p-1">
//                     <FaSave />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           {currentArea && (
//             <div
//               style={{
//                 position: "absolute",
//                 left: currentArea.left,
//                 top: currentArea.top,
//                 width: currentArea.width,
//                 height: currentArea.height,
//                 border: "2px solid blue",
//               }}
//             />
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-4 rounded">
//             <h2 className="text-xl font-bold mb-4">Edit Area</h2>
//             <div className="mb-2">
//               <label>ID:</label>
//               <input
//                 type="text"
//                 value={editArea.id}
//                 disabled
//                 className="ml-2 p-1 border"
//               />
//             </div>
//             <div className="mb-2">
//               <label>Serial ID:</label>
//               <input
//                 type="text"
//                 value={editArea.serialId}
//                 onChange={(e) =>
//                   setEditArea({ ...editArea, serialId: e.target.value })
//                 }
//                 className="ml-2 p-1 border"
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleModalSave}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditionEPageEdit;

import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const EditionEPageEdit = ({ editionid }) => {
  const [imgData, setImgData] = useState({});
  const [mapAreas, setMapAreas] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentArea, setCurrentArea] = useState(null);
  const [editArea, setEditArea] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (editionid) {
      fetch(`http://localhost:5000/edition-single-news-page/${editionid}`)
        .then((res) => res.json())
        .then((data) => {
          setImgData(data);
          setMapAreas(
            Array.isArray(data.selectedArea) ? data.selectedArea : []
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setMapAreas([]);
        });
    }
  }, [editionid]);

  const handleMouseDown = (event) => {
    if (
      event.target.tagName === "BUTTON" ||
      event.target.tagName === "svg" ||
      event.target.tagName === "path"
    )
      return;
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);
    setCurrentArea({
      id: mapAreas.length + 1, // unique ID
      left: offsetX,
      top: offsetY,
      width: 0,
      height: 0,
      serialId: "",
    });
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    setCurrentArea((prevArea) => ({
      ...prevArea,
      width: offsetX - prevArea.left,
      height: offsetY - prevArea.top,
    }));
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    if (currentArea && currentArea.width > 0 && currentArea.height > 0) {
      setMapAreas([...mapAreas, currentArea]);
    }
    setCurrentArea(null);
  };

  const handleSave = () => {
    // const dataToSave = {
    //   ...imgData,
    //   selectedArea: mapAreas,
    // };

    fetch(`http://localhost:5000/edition-single-news-page/${editionid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapAreas),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Area saved:", data);
      })
      .catch((error) => {
        console.error("Error saving area:", error);
      });
  };

  const handleEdit = (area) => {
    setEditArea(area);
    setShowModal(true);
  };

  const handleDelete = (areaId) => {
    setMapAreas(mapAreas.filter((area) => area.id !== areaId));
  };

  const handleModalSave = () => {
    setMapAreas(
      mapAreas.map((area) => (area.id === editArea.id ? editArea : area))
    );
    setShowModal(false);
  };

  return (
    <div className="max-w-[1440px] w-[95%] mx-auto">
      <h1 className="text-center text-2xl font-semibold">
        This is Edition E Paper Edit Page
      </h1>

      <div className="flex flex-col items-center justify-center my-6">
        <div
          className="relative"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <img src={imgData?.img} alt="E-Paper" className="w-full" />
          {Array.isArray(mapAreas) &&
            mapAreas.map((area, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: area.left,
                  top: area.top,
                  width: area.width,
                  height: area.height,
                  border: "2px solid red",
                }}
              >
                <div className="absolute top-0 right-0 flex space-x-1 bg-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(area);
                    }}
                    className="p-1"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(area.id);
                    }}
                    className="p-1"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSave();
                    }}
                    className="p-1"
                  >
                    <FaSave />
                  </button>
                </div>
              </div>
            ))}
          {currentArea && (
            <div
              style={{
                position: "absolute",
                left: currentArea.left,
                top: currentArea.top,
                width: currentArea.width,
                height: currentArea.height,
                border: "2px solid blue",
              }}
            />
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Edit Area</h2>
            <div className="mb-2">
              <label>ID:</label>
              <input
                type="text"
                value={editArea.id}
                disabled
                className="ml-2 p-1 border"
              />
            </div>
            <div className="mb-2">
              <label>Serial ID:</label>
              <input
                type="text"
                value={editArea.serialId}
                onChange={(e) =>
                  setEditArea({ ...editArea, serialId: e.target.value })
                }
                className="ml-2 p-1 border"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditionEPageEdit;
