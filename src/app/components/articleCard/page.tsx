import React from "react";

const ArticleCard = ({image,date,readTime,likes,title,content}:any) => {
  return (
    <div>
      <div className="flex flex-col  w-[280px] sm:w-[330px]  rounded-sm lg:w-[370px] xl:w-[420px]">
        <div
          className="w-[280px] h-[144.17px] bg-PrimaryBlue rounded-sm sm:w-[330px] md:rounded-[2.84px] lg:h-[216px] lg:rounded lg:w-[370px] xl:w-[420px]
    "
        >
          {/* image */}


        </div>

        <div className=" bg-lightBlue  flex flex-col p-2  md:p-4 space-y-3 sm:p-4">
          <div className="w-[260px] font-nunitoSans text-TitleText text-lg font-bold leading-[25px]  md:text-xl lg:text-2xl  md:w-[280px] md:leading-snug md:tracking-tight lg:w-[350px]">
           {title}
          </div>
          <div className="w-[271px] font-nunitoSans text-TitleText text-[10px] font-normal leading-[15px] tracking-tight md:text-sm md:leading-normal lg:w-[360px]">
           {content}
          </div>

          <div className="flex justify-start gap-10 items-start lg:justify-between lg:gap-3">
            <div className="w-full font-nunitoSans  text-blue-600 text-[10px] font-bold leading-[14px] tracking-tight text-PrimaryBlue lg:text-base">
              {date}
            </div>
            <div className="w-full font-nunitoSans text-blue-600 text-[10px] font-bold leading-[14px] tracking-tight text-PrimaryBlue lg:text-base  ">
             {readTime}
            </div>
            <div className="w-full font-nunitoSans text-blue-600 text-[10px] font-bold leading-[14px] tracking-tight text-PrimaryBlue lg:text-base">
              {likes}
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default ArticleCard;
