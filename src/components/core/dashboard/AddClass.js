import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import axios from "axios";
import UploadPhoto from "./UploadPhoto";

const AddClass = () => {
  const [url, setUrl] = useState(null);
  const { token } = useSelector((state) => state.user);

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    preference: "",
    description: "",
    timing: "",
    duration: "",
    price: "",
    categoryId: "",
  });

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const user = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/getCategory"
      );
      setCategories(user.data.data);
    } catch (error) {
      toast.error("Error in Creating Blog");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      toast.error("First Upload Image");
      return;
    }
    setLoading(true);
    const toastId = toast.loading("loading");
    try {
      const user = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/api/createClass",
        {
          name: formData.name,
          img: url,
          preference: formData.preference,
          description: formData.description,
          timing: formData.timing,
          duration: formData.duration,
          price: formData.price,
          categoryId: formData.categoryId,
          token: token,
        }
      );

      toast.success(user.data.message);
    } catch (error) {
      toast.error("Error in Creating Blog");
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
  return (
    <div className="flex flex-col pb-5">
      <div className=" sm:w-[80%] mx-auto border-[#ab9999] border-b-2 ">
        <h1 className="font-Inter text-[#f7ffff] text-5xl font-extralight my-3">
          Create Class
        </h1>
        <div className="h-3 bg-[#ab9999] w-[35%]"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="sm:w-[85%] flex flex-col mx-auto gap-10 mt-6"
      >
        <UploadPhoto setUrl={setUrl} />
        <div className="bg-neutral-600 rounded-md flex flex-col gap-3 p-5 h-auto py-8 w-[80%] mx-auto">
          <label htmlFor="name" className="lg:w-[85%] lg:mx-auto">
            Name{" "}
            <input
              required
              type="text"
              name="name"
              id="name"
              className="block mt-1 w-full  mx-auto px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600"
              placeholder="Enter Product Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="preference" className="lg:w-[85%] lg:mx-auto">
            Preference
            <input
              type="text"
              name="preference"
              id="preference"
              required
              className="block mt-1 w-full  mx-auto px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600"
              placeholder="ex: For Boys or Girls "
              value={formData.preference}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description" className="lg:w-[85%] lg:mx-auto">
            Description{" "}
            <textarea
              required
              name="description"
              id="description"
              className="mt-1 h-[150px] px-2 py-1  w-full rounded-sm focus:outline-orange-600 focus:border-none text-orange-600"
              placeholder="Enter Description of Product"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <label htmlFor="timing" className="lg:w-[85%] lg:mx-auto">
            Timing
            <input
              type="text"
              name="timing"
              id="timing"
              required
              className="block mt-1 w-full  mx-auto px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600"
              placeholder="Enter Timing for the Class"
              value={formData.timing}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="duration" className="lg:w-[85%] lg:mx-auto">
            Duration
            <input
              type="text"
              name="duration"
              id="duration"
              required
              className="block mt-1 w-full  mx-auto px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600"
              placeholder="Duration of class"
              value={formData.duration}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price" className="lg:w-[85%] lg:mx-auto">
            Price{" "}
            <input
              required
              type="number"
              name="price"
              id="price"
              className="mt-1 w-full px-2 py-1 rounded-sm focus:outline-1 focus:outline-orange-600 focus:border-none text-orange-600"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
            />{" "}
          </label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="lg:w-[85%] lg:mx-auto py-[5px] rounded-sm mt-3 text-gray-500"
          >
            {" "}
            Category
            <option value="" className="text-gray-200 py-1">
              Choose a Category
            </option>
            {!loading &&
              categories?.map((element, index) => {
                return (
                  <option value={element._id} key={index}>
                    {element.name}
                  </option>
                );
              })}
          </select>
          <button
            type="submit"
            disabled={loading ? true : false}
            className="border mt-2 border-gray-100 roudned-sm hover:bg-white hover:text-black font-semibold w-fit mx-auto px-2 py-1"
          >
            {loading ? "Loading" : "Create Class"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
