import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileDrop from "../core/Navbar/ProfileDrop";
import { useClickOutside } from "../../utils/CustomHook";

const Navbar = () => {
  const { token } = useSelector((state) => state.user);

  const [show, setShow] = useState(false);
  const getham = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  const navRef = useRef(null);
  useClickOutside(navRef, () => {
    setShow(false);
  });

  return (
    <div
      className="shadow-gray-700 shadow-sm w-full mx-auto z-[100] fixed top-0 h-[60px] bg-gray-900 text-white"
      onClick={(e) => setShow(false)}
    >
      <div className="max-w-[1024px] relative w-10/12 h-full mx-auto text-xl flex justify-around items-center">
        <div className="flex items-center text-white bg-transparent">
          <Link to="/">
            <CgGym size={30} />
          </Link>
        </div>
        <div className=" w-[65%] justify-end gap-4 items-center text-gray-50 sm:flex hidden">
          <Link
            to="/"
            className=" transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Home
          </Link>
          <Link
            to="/program"
            className=" transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Programs
          </Link>
          <Link
            to="/blogs"
            className="transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Blogs
          </Link>
          <Link
            to="/shop"
            className=" transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            About
          </Link>
        </div>
        {!token && (
          <div
            className={`${
              !show ? "flex" : "hidden"
            }  justify-between gap-4 sm:gap-2 `}
          >
            <Link
              to="/login"
              className="border border-gray-700 transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 bg-gradient-to-r from-indigo-500 to-pink-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-gray-700 transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 bg-gradient-to-r from-indigo-500 to-pink-500"
            >
              SignUp
            </Link>
          </div>
        )}
        <RxHamburgerMenu size={24} className="sm:hidden " onClick={getham} />
        <div
          ref={navRef}
          className={`${
            show ? "flex" : "hidden"
          } absolute top-0 right-[-6%] bg-neutral-800 border-2 border-neutral-700 h-[240px] w-[190px] rounded-md mt-[20px] opacity-90 flex-col`}
        >
          <Link
            to="/"
            onClick={() => setShow(false)}
            className=" transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Home
          </Link>
          <Link
            to="/program"
            onClick={() => setShow(false)}
            className=" transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Programs
          </Link>
          <Link
            to="/blogs"
            className="transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Blogs
          </Link>
          <Link
            to="/shop"
            onClick={() => setShow(false)}
            className=" transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setShow(false)}
            className="transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2"
          >
            About
          </Link>
          <div className="flex gap-3 px-2 ">
            <Link
              to="/login"
              onClick={() => setShow(false)}
              className="border border-gray-700 transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 bg-gradient-to-r from-indigo-500 to-pink-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setShow(false)}
              className="border border-gray-700 transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 bg-gradient-to-r from-indigo-500 to-pink-500"
            >
              SignUp
            </Link>
          </div>
        </div>

        {token && <ProfileDrop />}
      </div>
    </div>
  );
};

export default Navbar;
