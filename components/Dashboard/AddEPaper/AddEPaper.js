import DashboardSideBar from "../../Shared/DashboardSideBar/DashboardSideBar";
import Loader from "../../Shared/Loader/Loader";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
const AddEPaper = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/all-alias")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [refetch]);
  const handleAddItem = (event) => {
    event.preventDefault();

    const form = event.target;
    const alias = form.categoryId.value;
    const heading = form.heading.value;
    const details = form?.details?.value;
    // const alias = form.alias.value;
    const author = user?.displayName;
    const image = form.img.files[0];
    const date = new Date();
    const formatDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=2d5b1a5401d8ef6742d2329ac8957810`;
    const url = `https://api.imgbb.com/1/upload?key=a961418ae79abf29d124da5532f6b6d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const addItem = {
            heading: heading,
            alias,
            authorName: author,
            img: data.data.url,
            details,
            createdAt: formatDate,
          };

          fetch("http://localhost:5000/add-e-paper", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addItem),
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
              form.reset("");
              toast("added successful", {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        }
      });
  };
  return (
    <div className="pt-10 max-w-[1440px] w-[95%] mx-auto flex gap-6">
      <div>
        <DashboardSideBar />
      </div>

      <div className=" rounded-sm text-3xl font-bold  text-left flex-grow shadow text-black">
        <h1 className="text-center py-4">Add a E-paper today</h1>
        <form
          onSubmit={handleAddItem}
          className="flex mx-4 m-auto flex-col gap-4  p-8 rounded"
        >
          {/*E-paper Heading */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="heading"
                value="Heading"
                className="font-semibold text-xl "
              />
            </div>
            <TextInput
              className="text-lg font-normal"
              name="heading"
              type="text"
              placeholder="Type heading"
              required={true}
              shadow={true}
            />
          </div>
          {/* E-Paper details */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="details"
                value="Details"
                className="font-semibold text-xl"
              />
            </div>
            <Textarea
              rows={5}
              name="details"
              type="text"
              className="text-lg font-light "
              placeholder="details"
              shadow={true}
            />
          </div>
          {/* Alias: Date */}
          {/* <div>
            <div className="mb-2 block">
              <Label
                htmlFor="alias"
                value="News alias"
                className="font-semibold text-xl"
              />
            </div>
            <TextInput
              id=" alias"
              type="text"
              name="alias"
              placeholder="news alias "
              required={true}
              shadow={true}
              className="text-lg font-normal"
            />
          </div> */}

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor=""
                value="Select Category"
                className="font-semibold text-xl"
              />
            </div>
            <select
              required
              name="categoryId"
              defaultValue="All"
              className="select text-black font-normal  w-full hmax-w-xs rounded my-2"
            >
              <option disabled selected>
                Type Alias
              </option>
              {categories?.map((category) => (
                <option defaultValue={category?.name}>{category?.name}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              required
              type="file"
              name="img"
              className="file-input text-base  file-input-bordered w-full border-2 rounded mb-2"
            />
          </div>

          {/* <div className="flex items-center justify-center">
                        {
                            loading && <Loader></Loader>
                        }
                    </div> */}
          <Button
            className="mb-8 bg-green-800 w-fit px-14 mx-auto hover:bg-green-600 shadow"
            type="submit"
          >
            Add News
          </Button>
          {/* {loading ? (
            <Loader></Loader>
          ) : (
            <Button
              className="mb-8 bg-green-800 w-fit px-14 mx-auto hover:bg-green-600 shadow"
              type="submit"
            >
              Add News
            </Button>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default AddEPaper;
