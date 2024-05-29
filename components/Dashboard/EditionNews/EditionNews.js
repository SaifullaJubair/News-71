import {
  Avatar,
  Button,
  FileInput,
  Select,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import { FaEdit, FaTrash } from "react-icons/fa";

const EditionNews = ({ editionid }) => {
  const [categories, setCategories] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [reload, setReload] = useState(true);
  const [edition, setEdition] = useState({});
  const { loading } = useContext(AuthContext);
  console.log(editionid);
  // console.log(editionid);
  console.log(edition);
  // useEffect(() => {
  //   if (editionid) {
  //     fetch("http://localhost:5000/all-alias", {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const filteredEdition = data.filter(
  //           (item) => item?._id === editionid
  //         );
  //         filteredEdition?.map((item) => setCategories(item?.name));
  //         setReload(false);
  //       });
  //   }
  // }, [editionid, reload]);

  // console.log(categories);
  useEffect(() => {
    if (editionid) {
      fetch(`http://localhost:5000/all-e-paper`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          const filteredData = data?.filter(
            (item) => item?.alias === editionid
          );
          // console.log(filteredData);
          setEdition(filteredData);
          setReload(false);
        });
    }
  }, [editionid, reload]);

  //   useEffect(() => {
  //     if (editionid) {
  //       fetch(`http://localhost:5000/getnews?id=${editionid}`, {
  //         method: "GET",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setNewsData(data);
  //         });
  //     }
  //   }, [editionid, reload]);

  //   const handleEdit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const heading = form.heading.value;
  //     const category_id = form.category_id.value;
  //     const location = form.location.value;
  //     const details = form.details.value;
  //     const image = form.image.files[0];
  //     if (image !== undefined) {
  //       const formData = new FormData();
  //       formData.append("image", image);
  //       const url = `https://api.imgbb.com/1/upload?key=2d5b1a5401d8ef6742d2329ac8957810`;
  //       fetch(url, {
  //         method: "POST",
  //         body: formData,
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.success) {
  //             const editData = {
  //               heading,
  //               details,
  //               location,
  //               category_id,
  //               img: data.data.url,
  //             };

  //             fetch(`http://localhost:5000/editnews/${newsData?._id}`, {
  //               method: "PUT",
  //               headers: {
  //                 "content-type": "application/json",
  //               },
  //               body: JSON.stringify(editData),
  //             })
  //               .then((res) => res.json())
  //               .then((data) => {
  //                 console.log(data);
  //                 form.reset("");
  //                 toast("Edit successful", {
  //                   position: toast.POSITION.TOP_CENTER,
  //                 });
  //                 setReload(!reload);
  //               });
  //           }
  //         });
  //     } else {
  //       const editData = {
  //         heading,
  //         details,
  //         location,
  //         category_id,
  //         img: newsData?.img,
  //       };

  //       fetch(`http://localhost:5000/editnews/${newsData?._id}`, {
  //         method: "PUT",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(editData),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           form.reset("");
  //           toast("Edit successful", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           setReload(!reload);
  //         });
  //     }
  //   };

  if (loading || reload) {
    return <Loader></Loader>;
  }
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-[100px]">
      <DashboardSideBar />
      <div className="flex-grow">
        <h2 className="title uppercase p-4 text-center mb-10 bg-purple-300 text-black text-2xl font-semibold rounded">
          E-paper{" "}
        </h2>
        {/* <form
          className="flex flex-col gap-4 shadow p-6  mx-auto"
          onSubmit={handleEdit}
        >
          <div>
            <h2>Heading</h2>
            <TextInput
              id="small"
              type="text"
              sizing="md"
              required={true}
              defaultValue={newsData?.heading}
              name="heading"
            />
          </div>
          <div>
            <h2>Categories</h2>
            <Select
              id="categories"
              required={true}
              className="w-full"
              name="category_id"
              defaultValue={newsData?.category_id}
            >
              {categories?.map((category) => {
                return newsData?.category_id === category.name ? (
                  <option value={category.name} selected>
                    {category.name}
                  </option>
                ) : (
                  <option value={category.name}>{category.name}</option>
                );
              })}
            </Select>
          </div>
          <div>
            <h2>Location</h2>
            <TextInput
              id="small"
              type="text"
              sizing="md"
              defaultValue={newsData?.location}
              name="location"
              required={true}
            />
          </div>
          <div>
            <h2>Present image</h2>
            <img src={newsData?.img} className="h-[100px]" alt="" />
          </div>

          <div id="fileUpload">
            <h2>Upload Image</h2>
            <FileInput id="file" name="image" />
          </div>
          <div>
            <h2>Details</h2>
            <Textarea
              id="small"
              type="text"
              sizing="md"
              rows={8}
              defaultValue={newsData?.details}
              name="details"
              required={true}
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div>
              <Button
                size="sm"
                className="w-full"
                color="success"
                type="submit"
              >
                Yes, Edit
              </Button>
            </div>
            <Link href={`/dashboard/allnews`}>
              <Button size="sm" color="failure">
                No, Cancel
              </Button>
            </Link>
          </div>
        </form> */}

        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Heading</Table.HeadCell>
            <Table.HeadCell>Operations</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {edition?.map((item, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>
                  <img src={item?.img} className="w-16 h-20" />
                </Table.Cell>
                <Table.Cell className="font-bold">
                  <Link
                    href={`/dashboard/edition/${item?._id}`}
                    className="hover:text-blue-500"
                  >
                    {item?.heading}
                  </Link>
                </Table.Cell>

                <Table.Cell className="flex gap-3">
                  <Link href={`/dashboard/edition/edit/${item?._id}`}>
                    {" "}
                    <Button size="xs">
                      <FaEdit className="mr-2"></FaEdit> Edit
                    </Button>
                  </Link>

                  {/* <Button
                    size="xs"
                    color="failure"
                    onClick={() => showModal(item)}
                  >
                    <FaTrash className="mr-2"></FaTrash> Delete
                  </Button> */}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EditionNews;
