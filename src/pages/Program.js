import React from "react";
import programimg from "../asset/programimg.webp";
import cardio from "../asset/cardio.avif";
import training2 from "../asset/training2.jpg";
import strength from "../asset/training.jpg";
import weightloss from "../asset/weightloss.jpg";
import kickboxing from "../asset/kickboxing.jpg";
import Timing from "../components/core/programs/Timing";
import Footer from "../components/common/Footer";
import Modal from "../components/common/Modal";
const Program = () => {
  return (
    <div className="flex gap-10 flex-col bg-gray-900 text-white pb-11">
      <div className="relative">
        <img src={programimg} alt="" className="w-screen md:h-full h-[200px]" />
        <h1 className="absolute text-4xl md:text-[60px] sm:top-[20%] top-[30%] left-[20%] sm:left-[40%] bg-white p-3 md:p-5 font-bold text-amber-400 md:leading-[60px]">
          PROGRAMS
        </h1>
      </div>
      <div className="flex justify-center sm:gap-8 md:w-10/12 mt-8 mx-auto flex-wrap">
        <div className="w-[320px] flex flex-col gap-5 items-center mx-4">
          <img
            src={cardio}
            alt=""
            className="h-[150px] w-[150px] rounded-[50%]"
          />
          <h1 className="text-[24px] text-[#bbd3d6] font-bold leading-7">
            CARDIO
          </h1>
          <p className="text-left text-[#bbd3d6] text-[16px] font-inter w-[100%] leading-7">
            Cardiovascular exercise is exercise that gets your heart rate up.
            Though some people use it solely for weight loss, cardio has other
            benefits as well. There are a wide variety of cardiovascular
            exercises, but consistency, duration, and intensity are the most
            important factors for meeting your fitness goals
          </p>
        </div>
        <div className="w-[320px] flex flex-col gap-5 items-center">
          <img
            src={strength}
            alt=""
            className="trapezium h-[150px] w-[150px]"
          />
          <h1 className="text-[24px] text-[#bbd3d6] font-bold leading-7">
            STRENGTH
          </h1>
          <p className="text-left text-[#bbd3d6] text-[16px] font-inter w-[100%] leading-7">
            Our strength program is designed to teach both beginners and
            experienced athletes the foundational principles of strength
            training in a controlled setting, with coaching focused on attention
            to detail. Our strength classes are designed to be paired with our
            fitness classes to improve overall fitness
          </p>
        </div>
        <div className="w-[320px] flex flex-col gap-5 items-center">
          <img
            src={training2}
            alt="endurance"
            className="w-[150px] h-[150px] triangle"
          />
          <h1 className="text-[24px] text-[#bbd3d6] font-bold leading-7">
            ENDURANCE
          </h1>
          <p className="text-left text-[#bbd3d6] text-[16px] font-inter w-[100%] leading-7">
            Designed to improve cardiovascular performance through sustained
            workouts combined with high intensity interval training. Bodyweight
            and kettlebell work round out the program to ensure proper muscle
            development and injury prevention.
          </p>
        </div>
        <div className="w-[320px] flex flex-col gap-5 items-center mt-5">
          <img
            src={kickboxing}
            alt="endurance"
            className="w-[150px] h-[150px] babel"
          />
          <h1 className="text-[24px] text-[#bbd3d6] font-bold leading-7">
            KICK BOXING
          </h1>
          <p className="text-left text-[#bbd3d6] text-[16px] font-inter w-[100%] leading-7">
            Kickboxing is the ultimate striking sport that involves using a wide
            variety of techniques to outsmart and overpower your opponent. From
            punches to kicks, knees to elbows, this sport has it all!
          </p>
        </div>
        <div className="w-[320px] flex flex-col gap-3 items-center mt-2">
          <img
            src={weightloss}
            alt="endurance"
            className="w-[180px] h-[180px] eclipse"
          />
          <h1 className="text-[24px] text-[#bbd3d6] font-bold leading-7 text-center">
            WEIGHT LOSS TRAINING
          </h1>
          <p className="text-left text-[#bbd3d6] text-[16px] font-inter w-[100%] leading-7">
            When you’re looking to burn calories or lose weight, trainers often
            recommend resistance training—also called strength training or
            weight lifting—rather than aerobic or cardio exercise.
          </p>
        </div>
      </div>
      <Timing />
      <Footer />
    </div>
  );
};

export default Program;
