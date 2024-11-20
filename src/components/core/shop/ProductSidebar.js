import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../common/Modal";
import Button from "../../common/Button";

const ProductSidebar = ({ data }) => {
  const { token } = useSelector((state) => state.user);

  const [showModal, setModal] = useState(null);
  const navigate = useNavigate();

  const goBuy = (e) => {
    e.stopPropagation();
    if (!token) {
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
  const gotoCart = (e) => {
    e.stopPropagation();

    if (!token) {
      setModal({
        text1: "You are not logged in!",
        text2: "Please login to add To Cart",
        btn1Text: "Login",
        btn2Text: "Cancel",
        btn1Handler: () => navigate("/login"),
        btn2Handler: () => setModal(null),
      });
    }
  };
  return (
    <>
      <div className="flex pb-6 h-auto flex-col gap-4 px-6 bg-[rgb(253,253,245)]  sm:w-[35%] lg:w-[23%] rounded-lg">
        <div className="hidden sm:flex gap-1 border-y mt-5 w-[50%] mx-auto items-center text-gray-500 pb-1 ">
          <h1 className="text-center  mx-auto text-2xl font-extralight">
            {data?.name}
          </h1>
        </div>

        <img
          src={data?.img}
          alt={data?.name}
          className="hidden sm:block h-[250px] rounded-lg"
        />
        <div className="h-6 border-y border-gray-400 w-[90%] text-red-600 mx-auto text-center font-semibold">
          Price: <span className="text-green-500">₹{data?.price}</span>{" "}
        </div>
        <p className=" text-[16px]text-blue-800 sm:px-3 md:px-6">
          {data?.description}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            text={"Buy Now"}
            onclick={goBuy}
            css={
              "cursor-pointer rounded-sm  text-white bg-orange-600 transition-all duration-300 box-border transition-all duration-200 "
            }
          />
          <Button
            text={"Add to Cart"}
            onclick={gotoCart}
            css="cursor-pointer rounded-sm bg-gray-400 text-blue-900 "
          />
        </div>
        {showModal && <Modal modalData={showModal} />}
      </div>
    </>
  );
};

export default ProductSidebar;
