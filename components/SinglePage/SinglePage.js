import React, { useContext, useEffect, useState } from "react";
import {
  FaAngleDown,
  FaComment,
  FaEye,
  FaFacebook,
  FaHome,
  FaLocationArrow,
  FaLock,
  FaShare,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { BiDislike, BiLike, BiSend } from "react-icons/bi";
import { Avatar, Button, Rating, TextInput } from "flowbite-react";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "../Shared/Loader/Loader";
import { async } from "@firebase/util";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const SinglePage = ({ setCategoryNews, id }) => {
  const [loading, setLoading] = useState(false);
  const [againFetch, setAgainFetch] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  const router = useRouter();

  const [singleNewes, setSingleNews] = useState({});
  const [categoryName, setCategoryName] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      fetch(`http://localhost:5000/singlenews/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSingleNews(data);
          setCategoryName(data?.category_id);
        });
    }
  }, [id, againFetch]);

  let test = 0;

  useEffect(() => {
    fetch(`http://localhost:5000/newsCategory/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryNews(data);
      });
  }, [categoryName]);

  const {
    heading,
    details,
    img,
    createdAt,
    email,
    rating,
    total_dislikes,
    total_likes,
    total_view,
    authorName,
    category_id,
    location,
    authorImg,
  } = singleNewes;

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comment"],

    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comment/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    console.log(
      comment,
      category_id,
      createdAt,
      user?.email,
      user?.displayName
    );
    setLoading(true);
    const AddComment = {
      email: user?.email,
      createdAt: new Date().toISOString(),
      username: user?.displayName,
      comment,
      category_id,
      newsId: id,
      img: user?.photoURL,
      newsImg: img,
    };
    fetch(`http://localhost:5000/addcomment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast("Comment  added", {
          position: toast.POSITION.TOP_CENTER,
        });
        refetch();
        setLoading(false);
        form.reset("");
      });
    console.log(AddComment);
  };

  const handleLike = (newsData) => {
    if (user) {
      const data = {
        newsData,
        email: user?.email,
        img,
        heading,
        createdAt: new Date().toISOString(),
        category_id,
      };
      console.log(data);
      fetch("http://localhost:5000/increaselike", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast("Like added", {
              position: toast.POSITION.TOP_CENTER,
            });
            setAgainFetch(!againFetch);
          } else {
            toast("Already Liked", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          console.log(data);
        });
    } else {
      toast.error("Please Login", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const handleDisLike = (newsData) => {
    if (user) {
      const data = {
        newsData,
        email: user?.email,
        img,
        heading,
        createdAt: new Date().toISOString(),
        category_id,
      };
      fetch("http://localhost:5000/decreaselike", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast("Dislike added", {
              position: toast.POSITION.TOP_CENTER,
            });
            setAgainFetch(!againFetch);
          } else {
            toast("Already Disliked", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          console.log(data);
        });
    } else {
      toast.error("Please Login", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      {heading && (
        <Helmet>
          <title>News Detail: {heading}</title>
        </Helmet>
      )}

      <div>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          {" "}
          {heading}
        </h2>

        <div className="flex flex-wrap gap-3 justify-between  my-3">
          <div>
            <div class="flex items-center gap-3 my-3">
              <img
                class="inline-block h-14 w-14 rounded-full "
                src={authorImg}
              />
              <div>
                <h5 className=" text-gray-700 flex items-center gap-2">
                  Author: {authorName}
                </h5>
                <p className="text-sm text-gray-400">
                  Published Date: 22 Dec 2022, 10:22 PM
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-2xl mr-3 items-center">
            <span>
              <FaFacebook></FaFacebook>
            </span>
            <span>
              <FaYoutube></FaYoutube>
            </span>
            <span>
              <FaTwitter></FaTwitter>
            </span>
            <span>
              <FaShare></FaShare>
            </span>
          </div>
        </div>
        <div className="my-6">
          <hr />
        </div>
        <img src={img} alt="" className="w-full rounded" />

        <div className="my-4">
          <div className="flex flex-wrap  items-center">
            <div className="flex flex-wrap items-center gap-3 my-3">
              <span>
                <FaLocationArrow></FaLocationArrow>
              </span>
              <p className="text-gray-500">{location}</p>
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>

        <div>
          <p className="my-6">{details}</p>
        </div>

        <div className=" flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-3">
            <span
              onClick={() => handleLike(singleNewes)}
              className="ml-4 text-2xl text-blue-800"
            >
              <BiLike></BiLike>
            </span>
            {total_likes}
            <span
              onClick={() => handleDisLike(singleNewes)}
              className="ml-10 text-2xl text-red-700"
            >
              <BiDislike></BiDislike>
            </span>
            {total_dislikes}
          </div>
        </div>

        <div className="mt-8 ">
          <hr />
        </div>
        <div className="my-8">
          <h1 className="text-lg text-gray-500 pb-4 flex gap-2 items-center">
            <span>
              {" "}
              <FaComment></FaComment>
            </span>{" "}
            Post a comment
          </h1>
          <form onSubmit={handleComment}>
            {user?.uid ? (
              !loading ? (
                <div className="flex gap-2 items-center">
                  <Avatar rounded={true} />
                  <TextInput
                    id="md"
                    type="text"
                    sizing="md"
                    name="comment"
                    className="w-full lg:w-7/12"
                  />
                  <Button size="sm" color="gray" type="submit">
                    <BiSend className="mr-1"></BiSend>{" "}
                    <span className="font-semibold">Post</span>
                  </Button>
                </div>
              ) : (
                <Loader></Loader>
              )
            ) : (
              <div></div>
            )}
          </form>
          {user?.uid ? (
            <p></p>
          ) : (
            <div>
              <p className="mt-4 flex items-center gap-2 ">
                Please
                <Link
                  className="text-blue-500 font-semibold text-lg"
                  href="/login"
                >
                  <span className="flex items-center gap-1">
                    <FaLock className="text-gray-800"></FaLock> Login
                  </span>
                </Link>{" "}
                first to comment.
              </p>
            </div>
          )}
        </div>
        <div className="mb-6">
          <hr />
        </div>
        {/* right side  */}

        <Comment id={id} comments={comments}></Comment>
        <div className=" flex justify-start gap-2 my-8">
          <Button outline={true}>
            <FaAngleDown className="mr-1"></FaAngleDown> Load More
          </Button>
          <Link href="/" className="text-gray-600 ">
            <Button outline={true} gradientDuoTone="purpleToBlue">
              <FaHome className="mr-2"></FaHome> Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
