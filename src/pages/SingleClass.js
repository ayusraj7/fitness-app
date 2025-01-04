import React from "react";
import axios from "axios";
import Loading from "./Loading";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Error from "./Error";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";

const SingleClass = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [showModal, setModal] = useState(null);
  const { userData } = useSelector((state) => state.user);
  const fetchClass = async () => {
    try {
      setLoading(true);
      const user = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/api/class/${id}`
      );
      if (!user.data.success) {
        throw new Error(error);
      }

      setData(user.data.data[0]);
    } catch (error) {
      toast.error(`Blogs can't fetched`);
      setError(true);
    }
    setLoading(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchClass();
  }, []);

  if (loading) {
    return (
      <Loading
        text={"Class"}
        bgColor={
          "linear-gradient(to right, rgb(236, 72, 153), rgb(245, 158, 11))"
        }
      />
    );
  }

  if (error) {
    return <Error text={"on getting the Product"} />;
  }

  const handleOnBuy = (e) => {
    e.stopPropagation();
    if (!userData) {
      setModal({
        text1: "You are not logged in!",
        text2: "Please login to Buy",
        btn1Text: "Login",
        btn2Text: "Cancel",
        btn1Handler: () => navigate("/login"),
        btn2Handler: () => setModal(null),
      });
    }
  };

  return (
    <div className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 h-auto">
      <div className="mb-10 sm:min-h-[calc(100vh-100px)] w-11/12 sm:w-9/12  flex flex-col gap-[0px] mx-auto pt-[60px]">
        <img
          src={data?.img}
          alt={data?.name}
          className="rounded-md h-[350px] sm:w-[80%]"
        />
        <div className="flex flex-col gap-2 mt-[20px] min-h-[300px]">
          <h1 className="text-3xl text-white font-semibold">{data?.name}</h1>
          <div className="w-[80%] flex flex-col gap-3">
            <p className="text-gray-700 text-sm font-semibold">
              {data?.preference}
            </p>
          </div>
          <div className="w-[80%] flex flex-col gap-3">
            <p className=" text-xl font-extralight">{data?.description}</p>
            <div className="flex sm:flex-row flex-col justify-between">
              <div className="flex flex-col sm:w-[55%]">
                <p className="text-blue-900">
                  Morning Timing :{" "}
                  <span className="text-white">{data?.timing}</span>
                </p>
                <p className="text-blue-900">
                  Evening Timing :{" "}
                  <span className="text-white">{data?.timing}</span>
                </p>
              </div>
              <p className="text-blue-900">
                Duration :<span className="text-red-800">{data?.duration}</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-blue-900">
                Student Enrolled :{" "}
                <span className="text-white">
                  {data?.studentEnrolled?.length
                    ? data?.studentEnrolled?.length
                    : 0}
                </span>
              </p>
              <p>
                Price : <span className="text-blue-800">₹{data?.price}</span>
              </p>
            </div>
          </div>
          <div className="mt-[40px] flex justify-between w-[75%] sm:w-[23%]">
            <Button
              text={"Buy Now"}
              css={
                "border border-white rounded-sm hover:border-none hover:bg-white hover:text-black cursor-pointer duration-200 "
              }
              onclick={handleOnBuy}
            />
            <Button
              text={"Instructor Details"}
              css={
                "border border-white rounded-sm hover:border-none hover:bg-white hover:text-black cursor-pointer duration-200"
              }
            />
          </div>
        </div>

        {!data?.studentEnrolled.includes(userData?._id) &&
          userData?.accountType === "member" && (
            <div>
              <Button
                text={"Buy Now"}
                css={
                  "text-white border border-white rounded-sm hover:bg-white hover:text-lime-500 "
                }
              />
            </div>
          )}
      </div>
      <Footer bgColor={"#424242"} />
      {showModal && <Modal modalData={showModal} />}
    </div>
  );
};

export default SingleClass;
