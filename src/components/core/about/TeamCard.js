import React from "react";

const TeamCard = ({ name, type, desc, img }) => {
  const text1 = desc.substr(0, desc.length / 2);

  const text2 = desc.substr(desc.length / 2 + 1, desc.length);

  return (
    <div className="rounded-lg  lg:w-[calc(100vw-15vw)] lg:h-[480px] mx-auto flex lg:flex-row flex-col lg:-ml-[15%]">
      <img
        className=" lazy w-full lg:w-1/2  h-[250px] lg:h-full object-fill"
        src={img}
        alt=""
      />
      <div className="lg:w-1/2 bg-[#2d2e2d] sm:p-5 p-2 lg:px-[10%]">
        <h2 className=" text-[#e8b857] font-Inter text-3xl font-senibold sm:mt-4">
          {name}
        </h2>
        <p className="  border-[#5a5454] border-b-2 sm:-mt-2 text-[#ebffff]">
          {type}
        </p>
        <div className="sm:w-[95%] mt-5 flex flex-col  gap-1 sm:gap-3">
          <p className="text-[12px] sm:text-sm text-[#f8ebeb] ">{text1}</p>
          <p className="text-[12px] sm:text-sm text-[#f8ebeb] ">{text2}</p>
        </div>
        {type !== "Founder" && (
          <div>
            <p className="text-[#fafafa] ">Certification</p>
            <ul className="text-sm text-[#f8ebeb]">
              <li>NCSF Certified Personal Trainer</li>
              <li>Sound Healing</li>
              <li>Yoga</li>
              <li>Reformer</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
