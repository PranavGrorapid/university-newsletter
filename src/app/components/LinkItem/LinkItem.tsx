// LinkItem.js
import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

function LinkItem({ text }:any) {
  return (
    <div className="flex items-center text-slate-900 text-[10px] font-nunitoSans font-semibold leading-3 tracking-tight hover:text-PrimaryBlue   md:text-[14px] lg:text-[16px]  xl:text-[18px] ">
      {text}
      <div>
        <MdNavigateNext />
      </div>
    </div>
  );
}

export default LinkItem;
