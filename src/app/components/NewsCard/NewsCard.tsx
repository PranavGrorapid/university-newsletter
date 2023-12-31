import React from "react";

const NewsCard = ({ image, date, readTime, likes, title, content }: any) => {
  return (
    <div>
      <div className="w-[280px]  flex-shrink-0  mx-auto p-2  rounded border-0.8 border-OtherBlue  sm:w-[330px] sm:p-4 md:w-[750px] lg:w-[1000px] nxl:w-[1180px] xl:w-[1400px]">
        <div className="flex flex-col my-3 space-y-5  md:space-y-0 md:flex-row-reverse md:justify-center md:gap-10  lg:gap-14 xl:gap-20">
          {/* here we are displaying images */}

          <div className=" bg-PrimaryGreenDisabled w-[260px] h-[167px]  rounded sm:w-[300px] md:w-[350px] md:h-[350px] md:mt-5  lg:w-[480px] lg:h-[400px]  lg:rounded-[14.86px] nxl:w-[500px] nxl:h-[430px]  nxl:rounded-[14.86px]   xl:w-[620px] xl:h-[450px]  xl:rounded-[18px]">
            {/* <Image src={mobileNews} alt="mobile" /> */}
          </div>

          {/* section which displays news title,content and dates starts */}

          <div className="flex flex-col space-y-4 ">
            <div className=" w-[260px]   text-lg text-TitleText font-bold leading-[26px]   font-nunitoSans  mt-5 sm:w-[300px] md:w-[350px]  md:text-[26px]  md:leading-[42px] md:tracking-tight  lg:w-[460px]  lg:text-[30px] nxl:w-[480px]  nxl:text-[32px]  xl:w-[530px]  xl:text-[36px]  tracking-tight nxl:leading-snug">
              {title}
            </div>
            <div className=" w-[260px]   text-sm text-TitleText font-normal font-nunitoSans leading-[21px] tracking-tight sm:w-[300px]  md:w-[350px] lg:text-lg lg:w-[500px] ">
              {content}
            </div>
            <div className=" w-[260px] hidden md:block  text-sm text-TitleText font-normal font-nunitoSans leading-[21px] tracking-tight sm:w-[300px]  md:w-[350px] lg:text-lg lg:w-[500px] ">
              {content}
            </div>

            <div className="flex justify-start gap-10 items-start ">
              <div className="w-full text-PrimaryBlue  text-[10px] font-bold leading-[14px] tracking-tight  lg:text-base">
                {date}
              </div>
              <div className="w-full text-PrimaryBlue  text-[10px] font-bold leading-[14px] tracking-tight  lg:text-base">
                {readTime}
              </div>
              <div className="w-full text-PrimaryBlue  text-[10px] font-bold leading-[14px] tracking-tight  lg:text-base">
                {likes}
              </div>
            </div>
          </div>

          {/* section which displays news title,content and dates ends */}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
