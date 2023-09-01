import React from 'react';

const ScholarshipBanner = ({ title, description, buttonText, registrationCount }:any) => {
  return (
    <div className=" bg-AccentMirage text-WhiteAccent">
      <div className="container mx-auto flex flex-col py-10 space-y-5 justify-center items-center md:flex md:flex-row md:justify-around md:py-10 md:items-center">
        <div>
          <div className="text-center text-white text-[32px] font-bold leading-tight">
            {title}
          </div>

          <div className=" w-[300px] md:w-[500px] text-center mx-auto text-white  text-sm font-normal leading-[19px] py-5 md:py-4">
            {description}
          </div>
        </div>

        <div>
          <button
            className="h-[61px] px-[35px] py-5 bg-white rounded flex-col justify-center items-center inline-flex bg-WhiteAccent text-PrimaryBlue"
            type="button"
          >
            <div className="text-blue-600 text-lg font-bold leading-loose">
              {buttonText}
            </div>
            <div className="text-blue-600 text-xs font-bold leading-snug">
              {registrationCount} people have registered
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipBanner;