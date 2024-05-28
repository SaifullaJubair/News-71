import {
  Button,
  Modal,
  Select,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";
import Loader from "../../Shared/Loader/Loader";
import {
  FaEdit,
  FaExternalLinkAlt,
  FaLink,
  FaMailBulk,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const AllComments = () => {
  const { user } = useContext(AuthContext);

  const [comments, setComment] = useState(null);

  const [refetch, setRefetch] = useState(false);

  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [commentUpdate, setCommentUpdate] = useState();
  console.log(editData?._id);

  useEffect(() => {
    fetch(`http://localhost:5000/comments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComment(data);
      });
  }, [refetch, user?.email]);

  console.log(comments);

  const onchangeUpdate = (e) => {
    const update = e.target.value;
    setCommentUpdate({ commentUpdate: update });
    console.log("test", update);
  };
  console.log();
  const handleMakeAdmin = (e) => {
    fetch(`http://localhost:5000/commentupdate/${editData?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("update");
          setEditData(null);
          setRefetch(!refetch);
        }
      });
  };

  const handleDeleteUser = (user) => {
    fetch(`http://localhost:5000/comment/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          setRefetch(!refetch);
          toast(`comment  deleted successfully`, {
            position: toast.POSITION.TOP_CENTER,
          });

          setDeleteData(null);
        }
      });
  };
  const showModal = (user) => {
    setDeleteData(user);
    console.log(user);
  };
  const showEditModal = (user) => {
    setEditData(user);
    console.log(user);
  };
  const onClose = () => {
    setDeleteData(null);
  };
  const onEditClose = () => {
    setEditData(null);
  };

  return (
    <div className="max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7">
      <DashboardSideBar></DashboardSideBar>
      <div className="flex-grow">
        {comments ? (
          <h2 className="title uppercase p-10 text-center mb-10 bg-purple-300 text-black text-2xl font-semibold">
            All Comment{" "}
          </h2>
        ) : (
          <Loader></Loader>
        )}
        {comments?.length ? (
          <p></p>
        ) : (
          <p className="text-2xl mt-16 text-center text-orange-500 ">
            You have No comment
          </p>
        )}

        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>comment</Table.HeadCell>
            <Table.HeadCell>date</Table.HeadCell>
            <Table.HeadCell>category</Table.HeadCell>
            <Table.HeadCell>Operations</Table.HeadCell>
            <Table.HeadCell>News link</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {comments?.map((comment, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>
                  <img
                    src={comment.newsImg}
                    className="h-12 w-12 rounded ring-1 ring-blue"
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell>{comment.comment}</Table.Cell>
                <Table.Cell>{comment.createdAt?.slice(0, 10)}</Table.Cell>
                <Table.Cell>{comment.category_id}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3  items-center ">
                    <Button size="xs" onClick={() => showEditModal(comment)}>
                      <FaEdit className="mr-2"></FaEdit> Edit
                    </Button>

                    <Button
                      size="xs"
                      color="failure"
                      onClick={() => showModal(comment)}
                    >
                      <FaTrash className="mr-2"></FaTrash> Delete
                    </Button>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    className="text-blue-400 truncate ... "
                    href={`/news/view/${comment?.newsId}`}
                  >
                    {" "}
                    <Button size="xs" outline={true}>
                      <FaExternalLinkAlt className="mr-2" /> Go to News
                    </Button>{" "}
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      {deleteData !== null && (
        <div>
          <div>
            <Modal show={true} size="md" popup={true} onClose={onClose}>
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this{" "}
                    <span className="font-bold">{deleteData?.name}</span> ?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button
                      color="failure"
                      onClick={() => handleDeleteUser(deleteData)}
                    >
                      Delete
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => {
                        setDeleteData(null);
                      }}
                    >
                      cancel
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}

      {/* Update user modal  */}

      {editData !== null && (
        <div>
          <div>
            <Modal show={true} size="md" popup={true} onClose={onEditClose}>
              <Modal.Header />
              <Modal.Body>
                <div>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to update this{" "}
                    <span className="font-bold">{editData?.name}</span> ?
                  </h3>
                  {/* name input field  */}
                  <div>
                    <div className="mb-2 block">
                      {/* <Label
                                                htmlFor="name"
                                                value="Your name"
                                            /> */}
                    </div>
                    <img src="" alt="" />
                  </div>
                  {/* email input field  */}
                  <div className="my-4">
                    <div className="mb-2 block">
                      {/* <Label
                                                htmlFor="email4"
                                                value="Your email"
                                            /> */}
                    </div>
                    <TextInput
                      id="email4"
                      type="email"
                      icon={FaMailBulk}
                      value={editData?.email}
                      readOnly
                    />
                  </div>
                  <div id="select" className="my-4">
                    <div className="mb-2 block">
                      {/* <Label
                                                htmlFor="role"
                                                value="Select your country"
                                            /> */}
                    </div>
                    <Textarea
                      id="update"
                      name="update"
                      required={true}
                      defaultValue={editData?.comment}
                      onChange={onchangeUpdate}
                    ></Textarea>
                  </div>
                  {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}

                  <div className="flex justify-center gap-4">
                    <Button
                      color="success"
                      onClick={() => handleMakeAdmin(editData)}
                    >
                      Update
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => {
                        setEditData(null);
                      }}
                    >
                      No, cancel
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllComments;
