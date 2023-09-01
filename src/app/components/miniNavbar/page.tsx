"use client";

import React, { useState,useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MiniNavbar = ({navLinks}:any) => {
  

  const [currentCard, setCurrentCard] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [cardsToShow,setCardsToShow]=useState(3)
  const [buttonSize,setButtonSize]=useState(10)


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 767 && screenWidth<=1023) {
        setCardsToShow(4);
        setButtonSize(20)
      } else if (screenWidth >= 1024  && screenWidth<=1223) {
        setCardsToShow(5);
        setButtonSize(16)
      }
      
      else if (screenWidth >= 1224) {
        setCardsToShow(6);
        setButtonSize(20)
      }

      
      
      else {
        setCardsToShow(3);
        setButtonSize(10)
      }
    };

    // Initial setup on component mount
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [cardsToShow]);



  const handleCardNext = () => {
    setCurrentCard((prevCard) =>
      prevCard + cardsToShow < navLinks.length ? prevCard + 1 : 0
    );
  };

  const displayedOptions = navLinks ? navLinks.slice(
    currentCard,
    currentCard + cardsToShow
  ) : [];
  







  return (
    <div className="bg-primaryBackground py-5 px-4 flex items-center justify-start space-x-2 sm:space-x-4 lm:space-x-8 md:space-x-10 md:justify-center md:px-6 nxl:space-x-12 xl:space-x-15 xl:px-8">
      <PrimaryButton purpose={"Apply now"} />

      {displayedOptions.map((li:any) => {
        return (
          <Link key={li}
            href={"/"}
            className="text-PrimaryBlue font-nunitoSans text-[8px] font-semibold leading-3 tracking-tight md:text-sm  md:leading-normal md:tracking-tight lg:text-lg  lg:leading-[30px] "
          >
            {li}
          </Link>
        );
      })}

      <button onClick={handleCardNext} className="text-PrimaryBlue">
        <IoIosArrowForward size={buttonSize} />
      </button>
    </div>
  );
};

export default MiniNavbar;
