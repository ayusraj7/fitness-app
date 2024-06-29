import React from "react";
import { useState } from "react";
import Button from '../../../components/common/Button'
import { useNavigate } from "react-router-dom";
const EditProfile = ({userData}) => {
    const navigate=useNavigate();
    const[loading,setLoading]=useState(false);
  return (
    <div className="rounded-md flex flex-col p-[5%] pb-10 px-[10%] gap-3 border border-neutral-500 bg-neutral-600">
      <div className="flex justify-between mt-3">
        <h1 className=" text-2xl text-gray-300 font-extralight">
          Personal Details
        </h1>
      </div>

      <div className="flex flex-col">
        <p className="text-sm text-gray-400">Name</p>
        <p className="text-[18px] ">{userData?.name}</p>
      </div>

      <div className="flex gap-4 md:flex-row flex-col justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Email</p>
          <p>{userData?.email}</p>
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="mobileno" className="text-gray-400 text-sm">Mobile No</label>
          <input type="number" name="mobileno" className=' py-1 rounded-sm border-none focus:outline-none px-3 text-xl text-orange-600' id="mobileno" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between">
        <div>
          <p className="text-gray-400 text-sm">Age</p>
          <input type="number" name="age" id="age" className="py-1  px-3 w-full text-gray-600 text-sm" />
        </div>
        <div className="flex gap-[4px] flex-col mt-2 ">
            <p className="text-gray-400 text-sm ">Gender</p>
          <select name="Gender" className="py-1  px-3  text-gray-600 text-sm" id="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className=" flex gap-3 mt-5 ">
        <Button
          text={loading ? "loading" : "Update"}
          css={
            " bg-orange-400 py-1  hover:bg-white hover:text-blue-900 rounded-sm "
          }
          onclick={()=>{console.log('update')}}
        />
        <Button
          text={"Cancel"}
          css={" bg-gray-400  hover:bg-white hover:text-blue-900 rounded-sm "}
          onclick={() => navigate("/dashboard/profile")}
        />
      </div>
    </div>
  );
};

export default EditProfile;
