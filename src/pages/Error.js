import React from "react";
import { MdError } from "react-icons/md";

const Error = ({ text }) => {
  return (
    <div className="h-[90vh] bg-black text-white flex items-center justify-center flex-col">
      <MdError size={100} />
      <h1 className="text-[40px] font-semibold">Error {text}</h1>
      <p className="text-2xl font-semibold">Please Try Again</p>
    </div>
  );
};

export default Error;
