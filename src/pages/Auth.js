import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gym from "../asset/offer.png";
import LoginForm from "../components/core/auth/LoginForm";
import SignupForm from "../components/core/auth/SignupForm";

const Auth = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const page = location;
  const goToPage = () => {
    if (page === "/login") {
      navigate("/signup");
    }

    if (page === "/signup") {
      navigate("/login");
    }
  };
  return (
    <div className="h-auto pt-[60px] md:pt-0 md:h-[100vh] w-full bg-violet-login flex justify-center items-center">
      <div className="bg-white w-[90%] lg:w-[60%]  md:h-[450px] rounded-md flex md:flex-row flex-col-reverse md:my-0 my-11">
        {page === "/login" && (
          <div className="md:w-1/2 flex flex-col">
            <LoginForm />
            <p className="text-normal w-[80%] px-8 mt-3 mb-2 ">
              Don't have an account ?
              <span className="text-violet-600 " onClick={goToPage}>
                {" "}
                Signup now{" "}
              </span>
            </p>
          </div>
        )}
        {page === "/signup" && (
          <div className="md:w-1/2 flex flex-col">
            <SignupForm />
            <p className="text-normal w-[80%] px-6 mt-3 mb-2 ">
              Not logged In ?
              <span className="text-violet-600 " onClick={goToPage}>
                {" "}
                Login{" "}
              </span>
            </p>
          </div>
        )}

        <div className="md:w-1/2  relative group flex justify-center">
          <img
            className="shadow-l-md w-full h-full opacity-80 object-fill rounded-r-md shadow-2xl "
            src={gym}
            alt="gym boy"
          />
          <p className="transition-all duraiton-200 opacity-100 md:w-[60%] tracking-wide hidden absolute top-[30%] text-3xl lg:text-[48px] text-center text-white  group-hover:block ">
            Good things comes to those who sweat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
