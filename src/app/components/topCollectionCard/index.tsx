










import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

const TopCollectionCard = ({ card }:any) => (

    
    

  <div className="w-72 bg-WhiteAccent rounded-lg  shadow-md relative bg-slate-50 bg-black bg-opacity-50 rounded-tl-lg rounded-tr-lg mx-3">
    <img src={card.image} alt="Card Header" className="w-full h-44 object-cover" />
    <div className="p-4">
      <div className="flex justify-between space-x-2">
        <button className="bg-PrimaryBlue w-full text-WhiteAccent px-4 py-1 rounded">Enroll Now</button>
        <button className="bg-gray-300 border border-PrimaryBlue w-full text-gray-600 px-4 py-1 text-PrimaryBlue rounded">Talk to an expert</button>
      </div>
      <div className="text-neutral-800 text-[8.74px] font-semibold mt-2 flex items-center">
        <span className="pe-2 text-PrimaryBlue">
          <MdVerified size={10} />
        </span>
        <span>50,000 learners enrolled</span>
      </div>
    </div>
    <div className="absolute top-8 left-8">
      <img src="/images/HomePage/Footer/Group 3885.png" alt="bg-image" />
    </div>
  </div>
);

export default TopCollectionCard;

