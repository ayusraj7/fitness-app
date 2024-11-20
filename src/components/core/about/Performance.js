import React from "react";
import photo1 from "../../../asset/health1.png";
import photo2 from "../../../asset/health2.png";
import photo3 from "../../../asset/health3.png";
import photo4 from "../../../asset/health4.png";

const Performance = () => {
  return (
    <div className="bg-white w-full pt-[5px] border-y-[7px] border-[#e12020] pb-8">
      <div className="mx-[8%]">
        <p className="text-[20px] py-2 font-semibold text-[#384081]">
          EVERY <span className="text-red-500">BODY</span> IS DIFFERENT
        </p>
        <div className="h-1 ml-1 w-[100px] bg-[#f60000] "></div>

        <div className="flex flex-col lg:flex-row gap-10 mt-8 ">
          <div className="flex flex-col lg:w-[45%] ">
            <h1 className="text-[#2a3281] text-[46px] font-bold">
              MAXIMIZE YOUR LIFE
            </h1>
            <p className="text-[21px] text-[#141e35] mt-4">
              Stop waiting to get in{" "}
              <span className="text-red-600">shape!</span>
            </p>
            <p className="text-[18px] md:text-[21px] text-[#141e35]">
              I will help you sculpt the body that fits your lifestyle and I'll
              help you maintain it through all aspects of life. Why give up the
              things you love to do? I will walk you through every step of
              transforming your body from nutrition to exercise all the way down
              to your molecular structure.
            </p>
            <p className="text-[18px] md:text-[21px] text-[#141e35] mt-2">
              Personalization is key to getting the best possible results, which
              is why my workout programs are modified to fit your individual
              fitness goals and fitness level. Whether you're new to working out
              or you're an experienced fitness buff my{" "}
              <span className="text-red-600">fitness masterclass</span> is
              designed for you to achieve your goals and to enjoy your life!
            </p>
            <button className="bg-red-500 mt-3 text-white text-[18px] font-medium w-fit px-5 py-3 rounded-md">
              FREE CONSULTATION
            </button>
          </div>

          <div className="flex lg:w-[55%] flex-wrap ">
            <div className="lg:w-1/2 p-4 flex flex-col gap-2">
              <img src={photo1} alt="" width={40} height={40} />
              <div>
                <p className="text-[20px] pb-1 font-semibold text-[#384081]">
                  Body Analysis
                </p>
                <div className="h-1 w-[60px] rounded-md bg-red-700 "></div>
              </div>
              <p className="text-[#474747] leading-5 tracking-wide text-[16px] w-[90%]">
                I usually start my consultations off by performing an in-depth
                health assessment, using functional movement screenings and a
                body composition analysis, to gauge your most accurate fitness
                level.
              </p>
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col gap-2">
              <img src={photo2} alt="" width={40} height={40} />
              <div>
                <p className="text-[20px] pb-1 font-semibold text-[#384081]">
                  Fitness Programs
                </p>
                <div className="h-1 w-[60px] rounded-md bg-red-700 "></div>
              </div>
              <p className="text-[#474747] leading-5 tracking-wide text-[16px] w-[90%]">
                Once fitness levels have been assessed, I design a custom
                workout routine for your goals, time constraints, & budget. I
                encourage, motivate & guide you to reach your health and fitness
                goals on a personalized level.
              </p>
            </div>
            <div className="p-4 lg:w-1/2 flex flex-col gap-2">
              <img src={photo3} alt="" width={40} height={40} />
              <div>
                <p className="text-[20px] pb-1 font-semibold text-[#384081]">
                  Health and Nutrition
                </p>
                <div className="h-1 w-[60px] rounded-md bg-red-700 "></div>
              </div>
              <p className="text-[#474747] leading-5 tracking-wide text-[16px] w-[90%]">
                As part of my training program, I'll work one-on-one with you as
                your nutrition coach to develop a meal plan that creates new and
                sustainable eating habits that still fit your lifestyle & will
                maximize your fitness goals.
              </p>
            </div>
            <div className="p-4 lg:w-1/2 flex flex-col gap-2">
              <img src={photo4} alt="" width={40} height={40} />
              <div>
                <p className="text-[20px] pb-1 font-semibold text-[#384081]">
                  Flexibility
                </p>
                <div className="h-1 w-[60px] rounded-md bg-red-700 "></div>
              </div>
              <p className="leading-5 text-[#474747] tracking-wide text-[16px] w-[90%]">
                My programs are flexible & specifically designed to help you
                reach your health & fitness goals. I'll work with you to
                customize an exercise & meal plan that reflects not only your
                short term goals but the long game as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
