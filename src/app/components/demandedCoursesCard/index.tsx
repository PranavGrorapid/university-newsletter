import React from "react";
import Rating from "../rating";
import PrimaryButton from "../Buttons/PrimaryButton";
import SmallButton from "../Buttons/SmallButton";

const DemandedCoursesCard = ({
  logo,
  programName,
  duration,
  totalUsers,
  startDate,
}: any) => {
  return (
    <div className="bg-WhiteAccent  p-4 rounded-lg shadow-md sm:w-[160.13px]  sm:h-[158px] relative xs:w-[140px] xs:h-[170px] md:w-[230px] md:h-60  md:rounded my-3 md:pt-10 lg:w-[360px] lg:h-[343px]">
      <div className="flex items-center justify-center gap-5 md:gap-10 lg:gap-12">
        <div className="mt-4">
          <img
            src={logo}
            alt="University Logo"
            className="w-[51.90px] h-[16.90px] mb-4  xs:w-[40px] md:w-[75px] md:h-[29.39px] lg:w-[129px] lg:h-[42px]"
          />
        </div>

        <div className="flex justify-center items-center gap-1">
          <div>
            <img src="/images/HomePage/multipleusers.svg" alt="users" className="md:w-[18.99px] md:h-[18.89px] lg:w-[27px] lg:h-[27px]" />
          </div>

          <div className="w-[35.81px] text-neutral-800 text-[4.02px] font-bold tracking-tight md:w-[62.61px] md:text-neutral-800 md:text-[7.04px] lg:w-[89px] lg:text-[10px]">
            {totalUsers}
          </div>

         
        </div>
      </div>

      <div className="flex flex-col">
        <div className="sm:w-[148.06px] font-nunitoSans  text-TitleText text-xs font-semibold leading-[14.08px] tracking-tight mb-2 xs:w-[120px] md:w-[200.89px]  md:text-lg md:font-bold md:leading-snug lg:w-[328px] lg:text-[26px]">
          {programName}
        </div>

        <div className="text-TitleText font-nunitoSans text-[7.24px] md:text-xs font-normal mb-2 lg:text-lg">
          Duration : {duration}
        </div>

        <div className="flex justify-start gap-5 lg:gap-12 items-center lg:mt-4">
          <div className="flex flex-col ">
            <div className="text-TitleText font-nunitoSans text-[5.63px] font-extrabold mb-1 md:text-[9.85px] lg:text-sm ">
              Starts on
            </div>

            <div className="text-TitleText font-nunitoSans  xs:text-[4px] sm:text-[7.24px] font-normal  md:text-xs lg:text-sm">
              {startDate}
            </div>
          </div>

          <div className="w-[61.79px] h-[21.26px] px-[13.90px] py-[4.63px] bg-PrimaryBlue rounded-sm justify-center items-center gap-[4.63px] inline-flex
          md:w-[90px] md:h-[36.20px] md:py-[8.10px] md:rounded  md:gap-[8.10px] lg:w-[154.08px] lg:h-[51.03px
          ">
            <button className="text-center font-nunitoSans text-WhiteAccent text-[6.49px] font-bold leading-[11.12px] md:text-[10px]">
              Enroll Now
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DemandedCoursesCard;
