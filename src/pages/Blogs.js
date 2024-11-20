import React from "react";
import img from "../asset/cardio2.avif";
import BlogContainer from "../components/core/blog/BlogContainer";
import Footer from "../components/common/Footer";
const Blogs = () => {
  return (
    <div className="bg-black  h-auto  pt-2">
      <div className="w-10/12 lg:w-8/12 mx-auto flex flex-col gap-3 ">
        <div className="flex flex-col gap-3">
          <div className=" border-[#ab9999] border-b-2 ">
            <h1 className="font-Inter text-[#f7ffff] text-center text-[70px] font-semibold ">
              Blogs
            </h1>
            <div className="h-3 bg-[#ab9999] w-[35%]"></div>
          </div>
          <p className="font-semibold text-xl text-white">
            For Fitness and Health
          </p>
        </div>

        <div className="w-[95%] mx-auto mt-6 flex sm:flex-row flex-col gap-8 justify-evenly">
          <img
            src={img}
            alt="blogs"
            className="rounded-md h-[370px] w-[100%] sm:w-[70%]"
          />
          <p className=" lg:w-[45%] text-sm lg:text-[17px] leading-6 text-zinc-400 font-inter flex items-center">
            Physical fitness and health is perhaps the main key to a sound body.
            It is the premise of an innovative creative movement. Fitness
            implies the state of being genuinely solid, particularly practices
            and legitimate nourishment it even incorporates being intellectually
            sound. It is the explanation, a condition of general prosperity set
            apart by actual wellbeing and mental solidness. Fitness isn’t simply
            twisting our bodies. It is tied in with having cardiovascular and
            generally solid perseverance and strength, just as a solid safe
            framework, and in particular, a fulfilled condition of your brain.
          </p>
        </div>

        {/* blogs container */}
        <div className="flex h-auto flex-wrap">
          <BlogContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
