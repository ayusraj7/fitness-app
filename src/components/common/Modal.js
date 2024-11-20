import React from "react";
import Button from "./Button";

const Modal = ({ modalData }) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-[rgb(22,29,41)] p-6">
        <p className="text-2xl font-semibold text-white">{modalData.text1}</p>
        <p className="mt-3 mb-5 leading-6 font-semibold text-xl text-gray-400">
          {modalData.text2}
        </p>
        <div className="flex items-center gap-4">
          <Button
            text={modalData.btn1Text}
            onclick={modalData.btn1Handler}
            css={
              "text-black hover:bg-yellow-300 transition-all duration-200 bg-yellow-400  cursor-pointer px-3 text-xl text-blue-900 rounded-sm"
            }
          />
          <Button
            text={modalData.btn2Text}
            onclick={modalData.btn2Handler}
            css="cursor-pointer text-xl rounded-sm bg-gray-500  px-[10px] hover:bg-orange-600 font-semibold text-gray-100  "
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
