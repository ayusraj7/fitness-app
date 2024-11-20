import React from "react";
import { CgGym } from "react-icons/cg";
import { useParams, Link } from "react-router-dom";
import img from "../../asset/gym.jpg";

const SideBar = () => {
  return (
    <>
      <div className="sm:flex pb-10 h-auto flex-col gap-4 px-6 bg-[rgb(253,253,245)] hidden w-[35%] lg:w-[25%] rounded-lg">
        <div className="flex gap-1 border-y mt-8 w-[50%] mx-auto items-center ">
          <Link to={"/"}>
            {" "}
            <CgGym size={24} />{" "}
          </Link>
          <h1 className="text-center  mx-auto text-2xl font-extralight">
            The Fitness
          </h1>
        </div>
        <img src={img} alt="The Fitness" className="h-[300px] rounded-lg" />
        <div className="h-6 border-y border-gray-400 w-[90%] text-red-600 mx-auto text-center">
          FITNESS BLOGS
        </div>
        <p className="text-[16px] text-blue-800 px-6">
          Fitness is one’s ability to execute daily activities with optimal
          performance, endurance, and strength with the management of disease,
          fatigue, and stress.
        </p>
      </div>
    </>
  );
};

export default SideBar;
