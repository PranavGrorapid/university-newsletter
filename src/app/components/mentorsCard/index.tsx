import React from 'react';

const MentorsCard = ({ user }:any) => (
  <div className="bg-white rounded-lg shadow-md mx-2 relative">
    <div
      className="w-[210px] h-[270px] rounded-sm bg-cover lg:w-[300px] lg:h-[300px]"
      style={{ backgroundImage: `url(${user.image})` }}
    ></div>
    <div className="w-[160px] p-4 bg-WhiteAccent absolute bottom-3 text-center flex flex-col justify-center items-center left-8 lg:left-16">
      <h3 className="text-base font-bold text-PrimaryBlue">{user.name}</h3>
      <p className="w-[83.81px] h-[15.29px] text-black text-[11.01px] font-semibold">{user.job}</p>
      <p className="text-black text-[8.26px] font-medium">{user.experience}</p>
    </div>
  </div>
);

export default MentorsCard;