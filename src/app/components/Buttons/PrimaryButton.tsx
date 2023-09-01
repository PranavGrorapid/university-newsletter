import React from 'react'

const PrimaryButton = ({purpose}:any) => {
  return (

    <div>
    <div className="w-[75.58px] h-[22.13px] px-[12.53px] py-[4.18px] bg-PrimaryBlue rounded-sm justify-center items-center gap-[4.18px] inline-flex md:hidden">
    <button className="text-center text-WhiteAccent text-[7.52px] font-bold leading-[10.02px]">{purpose}</button>
</div>


    <div className="flex px-4  w-28 h-11 py-2.5 bg-PrimaryBlue rounded justify-center items-center gap-2.5  hidden md:block">
    <button className="text-center text-WhiteAccent text-sm font-bold leading-normal">{purpose}</button>
</div>

</div>
  )
}

export default PrimaryButton
