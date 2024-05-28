import { Avatar, Button, Modal, Select, Table } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";
import Loader from "../../Shared/Loader/Loader";

const AllNews = () => {
  const [news, setNews] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [searchData, setSearchData] = useState("Tech");
  const router = useRouter();
  console.log(router.asPath);
  useEffect(() => {
    fetch("http://localhost:5000/allcategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/allnews/${searchData}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [refetch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const categoryName = e.target.categoryInput.value;
    setSearchData(categoryName);
    fetch(`http://localhost:5000/allnews/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  };

  const showModal = (news) => {
    setDeleteData(news);
  };
  const onClose = () => {
    setDeleteData(null);
    setEditData(null);
  };
  const handleDeleteNews = (news) => {
    fetch(`http://localhost:5000/news/${news._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setRefetch(!refetch);
          toast(`User ${news.heading} deleted successfully`, {
            position: toast.POSITION.TOP_CENTER,
          });
          setDeleteData(null);
        }
      });
  };

  const showEditModal = (news) => {
    setEditData(news);
  };
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto flex gap-6 mt-7">
      <DashboardSideBar></DashboardSideBar>
      <div>
        {news ? (
          <div className="flex-grow">
            {" "}
            <h2 className="title uppercase py-4  text-center mb-10 bg-purple-300 text-black text-2xl font-semibold rounded">
              All News{" "}
            </h2>
            <form
              className="mb-10 flex gap-4 flex-wrap items-stretch justify-center"
              onSubmit={handleSearch}
            >
              <div id="select w-[200px]">
                <Select
                  id="categories"
                  required={true}
                  className="w-[200px]"
                  name="categoryInput"
                >
                  {categories?.map((category) => {
                    return category.name == "Tech" ? (
                      <option value={category.name} selected>
                        {category.name}
                      </option>
                    ) : (
                      <option value={category.name}>{category.name}</option>
                    );
                  })}
                </Select>
              </div>
              <Button className="" type="submit">
                Search
              </Button>
            </form>
            <Table striped={true} className="w-[95%] mx-auto scroll-mx-7">
              <Table.Head>
                <Table.HeadCell>#</Table.HeadCell>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Heading</Table.HeadCell>
                <Table.HeadCell>Author Name</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Total Likes</Table.HeadCell>
                <Table.HeadCell>Total Dislikes</Table.HeadCell>
                <Table.HeadCell>Location</Table.HeadCell>
                <Table.HeadCell>Operations</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {news?.map((news, index) => (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell>
                      <Avatar img={news.img} />
                    </Table.Cell>
                    <Table.Cell>{news.heading}</Table.Cell>
                    <Table.Cell>{news.authorName}</Table.Cell>
                    <Table.Cell>{news.category_id}</Table.Cell>
                    <Table.Cell>{news.total_likes}</Table.Cell>
                    <Table.Cell>{news.total_dislikes}</Table.Cell>
                    <Table.Cell>{news.location}</Table.Cell>
                    <Table.Cell className="flex flex-wrap gap-3 items-center justify-center my-auto">
                      <Link href={`/news/edit/${news._id}`}>
                        <Button
                          size="xs"
                          className="my-auto"
                          onClick={() => showEditModal(news)}
                        >
                          <FaEdit className="mr-2"></FaEdit> Edit
                        </Button>
                      </Link>
                      <Button
                        size="xs"
                        className="my-auto"
                        color="failure"
                        onClick={() => showModal(news)}
                      >
                        <FaTrash className="mr-2"></FaTrash> Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>{" "}
          </div>
        ) : (
          <Loader></Loader>
        )}
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
                    <span className="font-bold">{deleteData?.heading}</span> ?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button
                      color="failure"
                      onClick={() => handleDeleteNews(deleteData)}
                    >
                      Yes, I'm sure
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => {
                        setDeleteData(null);
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

export default AllNews;
