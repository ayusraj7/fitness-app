import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import { useSelector } from "react-redux";

const ClassCard = ({ element }) => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/class/${element._id}`);
  };

  const booknow = (e) => {};
  return (
    <div
      className="bg-gray-800 rounded-md h-auto md:h-[150px] border items-center md:gap-0 pb-3 md:pb-0 border-gray-800 flex flex-col md:flex-row justify-between gap-3 md:pr-3"
      onClick={goto}
    >
      <img
        src={element.img}
        alt=""
        className="rounded-l-md h-[200px] md:h-[150px] w-full md:w-[150px]"
      />

      <div className="flex flex-col gap-1 items-center">
        <h1>{element.name}</h1>
        <h6 className="text-slate-light">{element.preference}</h6>
        <p>{element.days}</p>
        <p className="text-sm text-lime-300">duration : {element.duration}</p>
        <p className="text-orange-300 text-[14px]">
          ₹{element.price} per month
        </p>
      </div>

      {(!userData || userData?.accountType === "member") && (
        <Button
          wi={"w-fit"}
          text={"Check Now"}
          css={
            "border border-[#ffffff26] hover:border-[#ffffff30] hover:bg-[#ffffff26] h-fit text-white text-normal"
          }
        />
      )}
    </div>
  );
};

export default ClassCard;
