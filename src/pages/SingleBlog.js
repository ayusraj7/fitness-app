import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "./Loading";
import toast from "react-hot-toast";
import Footer from "../components/common/Footer";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../components/common/SideBar";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import moment from "moment";

const SingleBlog = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const fetchBlog = async () => {
    try {
      setLoading(true);
      const user = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/api/blog/${id}`
      );

      setData(user.data.data[0]);
      setLoading(false);
    } catch (error) {
      toast.error(`Blogs can't fetched`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const goto = () => {
    navigate(`/blogs/?=${data?.creator?._id}`);
  };

  return (
    <div className="bg-[#F2F1EB]">
      <div className=" min-h-[90vh] lg:px-[100px] px-5 gap-8 pt-6 flex justify-between sm:mb-8">
        {loading ? (
          <Loading text={"Blog"} bgpresent={false} />
        ) : (
          <>
            <div className="text-white flex flex-col gap-3 md:w-[65%] lg:w-[80%]">
              <img
                src={data?.img}
                alt=""
                className="hover:shadow-white hover:shadow-sm h-[200px] sm:h-[360px] w-full rounded-lg"
              />
              <div className=" sm:mt-5 flex justify-between w-full">
                <h1 className="text-[#F97300] text-4xl">{data?.name}</h1>
                {userData?.accountType === "trainer" &&
                  userData?._id === data?.creator?._id && (
                    <div className="flex gap-1 items-center ">
                      <FiEdit size={30} className="text-green-700" />
                      <MdDelete size={32} className="text-orange-500" />
                    </div>
                  )}
              </div>
              <div className="sm:mt-8 flex flex-col gap-6">
                <div className="flex justify-between">
                  <p className="text-[#32012F] text-xl">
                    Author:{" "}
                    <span
                      onClick={goto}
                      className="rounded-md font-medium hover:text-black text-[#F97300]"
                    >
                      {data?.creator?.name}
                    </span>
                  </p>
                  <p className="text-xl text-[#32012F]">
                    {moment(data?.createdAt).fromNow()}
                  </p>
                </div>
                <p className="text-[16px] sm:text-[20px] text-blue-900 md:w-[85%]">
                  {data?.description}
                </p>
              </div>
            </div>
            <SideBar />
          </>
        )}
      </div>
      <Footer bgColor={"#424242"} />
    </div>
  );
};

export default SingleBlog;
