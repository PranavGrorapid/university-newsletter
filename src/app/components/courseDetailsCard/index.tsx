import React from 'react'
import Rating from '../rating';

const courseDetailsCard =({ logo, programName, duration, rating,stream,numReviews }:any) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={logo} alt="University Logo" className="mb-4 w-[73.56px] h-[24.79px] " />
        <h2 className="text-neutral-800 text-lg font-semibold mb-1">{programName}</h2>
        <p className="text-slate-900 text-[10.21px] font-semibold mb-3">{duration} | {stream}</p>
       
        

    
        <Rating rating={rating} className  />
      
       
     
        <div className="flex justify-start gap-5 mt-4">
        <button className=" bg-PrimaryBlue text-WhiteAccent w-[54.99px] h-[22px] px-[14.99px] py-[5px] bg-blue-600 rounded-sm flex justify-center items-center space-x-1 md:w-[71.93px] md:h-[28.98px] md:px-[19.47px] md:py-[6.49px] lg:w-[102.63px] lg:h-[41.54px] lg:px-[27.82px] lg:py-[9.27px]">
  <span className="text-white text-[7px] font-bold leading-3 md:text-xs lg:text-sm xl:text-base">Explore</span>
</button>

<button className="w-[59.99px] h-[22px] px-[14.99px] py-[5px] rounded-sm border border-blue-600 flex justify-center items-center space-x-1 border-PrimaryBlue text-PrimaryBlue md:w-[71.93px] md:h-[28.98px] md:px-[19.47px] md:py-[6.49px] lg:w-[102.63px] lg:h-[41.54px] lg:px-[27.82px] lg:py-[9.27px]">
  <span className="text-blue-600 text-[7px] font-bold leading-3 md:text-xs lg:text-sm xl:text-base">Compare</span>
</button>

        </div>
      </div>
    );
  };

export default courseDetailsCard
