import React, { useState, useEffect } from "react";
import ClassCard from "./ClassCard";
import toast from "react-hot-toast";
import axios from "axios";
import Loading from "../../../pages/Loading";

const Classes = () => {
  const [classes, setClasses] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const user = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/getClasses"
      );
      setClasses(user.data.data);
    } catch (error) {
      toast.error("Error in Fetching Classes");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  if (loading) {
    return <Loading text={"Classes"}></Loading>;
  }
  return (
    <div className="bg-[#0a0a0a]">
      <div className="flex w-10/12 gap-11 max-w-[1024px] mx-auto flex-col">
        {/* 1st div  */}
        <div className="flex flex-col gap-3 mt-5">
          <div className=" border-[#ab9999] border-b-2 ">
            <h1 className="font-Inter text-[#f7ffff] text-5xl font-semibold my-3">
              Classes we Offer
            </h1>
            <div className="h-3 bg-[#ab9999] w-[35%]"></div>
          </div>
          <p className="font-semibold text-xl text-white">
            In-Person in Jaitpur
          </p>
        </div>
        {/* 2nd div */}
        <div className="text-white flex  gap-6 pb-11 flex-col">
          {classes?.map((element, index) => {
            return <ClassCard element={element} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Classes;
