import React from "react";

const Workout = () => {
  return (
    <div className="bg-[#0a0a0a] text-white w-full lg:h-[75%] pt-4 sm:px-5 ">
      <div className="w-10/12 md:w-9/12 mx-auto h-full flex flex-col gap-3 sm:p-2">
        {/* headline */}
        <div className=" border-[#ab9999] border-b-2 ">
          <h1 className="font-Inter text-[#f7ffff] text-5xl font-semibold my-3">
            The Workout
          </h1>
          <div className="h-3 bg-[#ab9999] w-[35%]"></div>
        </div>

        {/* body */}
        <div className="bg-transparent font-mono text-zinc-300 flex flex-col gap-3 lg:w-[90%] mt-[50px] mx-auto  text-sm sm:text-[17px]">
          <p className="">
            There is not limit to what you are capable of, physically and
            mentally. The Limit is about perseverance. The goal is to push
            yourself past your individual limit.
          </p>
          <p className="hidden sm:block">
            We believe that each person requires unique training for their
            personal abilities. Our trainers are all certified and able to adapt
            to your needs, whaether you are dealing with an injry or health
            issue, are pregnant or postpartum or you're just looking for the
            ultimate challenge.There's always a way to train hard and get
            results.
          </p>
          <p className="">
            Our Videos provide a variety of workouts with movements that are
            simple,effective and safe, no matter your level. We priortize proper
            form and biomechanics with clear instructions. Our goal is to make
            you feel strong and confident in yourself, no matter your level.
          </p>
          <p className="">
            We are excited to help your find your limit and push yourself past
            it. Now let's do it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workout;
