import React from 'react'

const  ArticlenewsCard = ({image,date,readTime,likes,title,content}:any) => {
  return (
    <div className="w-[300px] bg-lightBlue mx-auto  px-[16px] py-[15px]  rounded-sm  sm:w-[340px] lm:w-[380px] md:w-[360px] lg:w-[480px] nxl:w-[560px] xl:w-[630px]  ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2 lg:space-y-3">
          <div className=" w-[180px]  text-TitleText font-nunitoSans text-[11.13px] font-bold leading-[14.47px] tracking-tight sm:w-[206.98px] md:w-[220px] lm:text-[12px] md:text-[14px] md:leading-snug lg:text-[18px] lg:w-[350px] nxl:text-[20px] xl:text-[24px]">
            {title}
          </div>
          <div className=" text-TitleText text-[8px] font-nunitoSans font-normal leading-[13.36px] tracking-tight  md:text-[10px] lg:text-[14px] xl:text-[16px] ">
            {content}
          </div>

          <div className="flex justify-start gap-4 items-start lg:justify-between lg:gap-3">
            <div className="w-full font-nunitoSans  text-[7px]  font-bold leading-[14px] tracking-tight text-PrimaryBlue lg:text-base">
              {date}
            </div>
            <div className="w-full font-nunitoSans  text-[7px]   font-bold leading-[14px] tracking-tight text-PrimaryBlue lg:text-base  ">
              {readTime}
            </div>
            <div className="w-full font-nunitoSans  text-[7px]   font-bold leading-[14px] tracking-tight text-PrimaryBlue lg:text-base">
              {likes}
            </div>
          </div>
        </div>

        <div>
          <div className="w-[71.23px] h-[71.23px] bg-PrimaryBlue rounded-md  lg:w-[100px] lg:h-[100px] nxl:w-[134.69px] nxl:h-[134.69px]">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlenewsCard
