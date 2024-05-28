import { Button, Table } from "flowbite-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";
import Loader from "../../Shared/Loader/Loader";

const AllDisLikedNews = () => {
  const { user } = useContext(AuthContext);
  const [dislike, setDisLike] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/dislike/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisLike(data);
      });
  }, [user?.email]);
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7">
      <DashboardSideBar></DashboardSideBar>
      <div className="flex-grow">
        {dislike ? (
          <h2 className="title uppercase p-10 text-center mb-10 bg-purple-300 text-black text-2xl font-semibold">
            All Dislike{" "}
          </h2>
        ) : (
          <Loader></Loader>
        )}
        {dislike?.length ? (
          <p></p>
        ) : (
          <p className="text-2xl mt-16 text-center text-orange-500 ">
            You have No Like
          </p>
        )}

        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>News Heading</Table.HeadCell>
            <Table.HeadCell>date</Table.HeadCell>
            <Table.HeadCell>category</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {dislike?.map((comment, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>
                  <img
                    src={comment.newsImg}
                    className="h-12 w-12 rounded  "
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell>
                  <Link
                    className="text-blue-400 truncate ..."
                    href={`/news/view/${comment?.id}`}
                  >
                    {" "}
                    {comment?.heading?.slice(0, 40)}...
                  </Link>
                </Table.Cell>
                <Table.Cell>{comment.createdAt?.slice(0, 10)}</Table.Cell>
                <Table.Cell>{comment.category_id}</Table.Cell>
                <Table.Cell>
                  <Button className="" color="failure">
                    <FaTrash className="mr-2"></FaTrash>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllDisLikedNews;
