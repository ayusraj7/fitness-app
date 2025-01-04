import React from "react";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";
import img from "../../asset/gym.jpg";

const SideBar = () => {
  return (
    <>
      <div className="sm:flex pb-10 h-auto max-h-[80vh] flex-col gap-4 px-6 bg-[#424242] hidden w-[35%] lg:w-[25%] rounded-lg">
        <div className="flex gap-1 border-y py-[2px] text-white mt-8 w-[50%] mx-auto items-center">
          <Link to={"/"}>
            {" "}
            <CgGym size={24} />{" "}
          </Link>
          <h1 className="text-center mx-auto text-2xl font-extralight text-white">
            The Fitness
          </h1>
        </div>
        <img
          src={img}
          alt="The Fitness"
          className="h-[300px] px-2 rounded-lg"
        />

        <p className="text-[16px] text-white px-5">
          Fitness is one’s ability to execute daily activities with optimal
          performance, endurance, and strength with the management of disease,
          fatigue, and stress.
        </p>
      </div>
    </>
  );
};

export default SideBar;
