import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';

const SkollegeHighlightsCarousel = ({ slides }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

//   this fn is called when prev button is clicked

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  //   this fn is called when next button is clicked

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  //   this fn is called when gotoslide button is clicked

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (

    
    <div className='max-w-full w-full m-auto pt-10 bg-WhiteAccent px-4 relative group container'>
      {/* place where image is kept */}
      <Image
        alt="Mountains"
        src={slides[currentIndex]}
        className='w-full rounded-2xl bg-center bg-cover duration-500'
        // Adding transition for smoother effect
        quality={100}
        sizes="100vw"
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 xl:left-10 text-2xl md:bg-WhiteAccent p-2  rounded-full  text-BlackAccent cursor-pointer xs:top-[35%] sm:left-5 sm:top-[35%] md:left-5 md:top-[35%] lg:left-10 lg:top-[35%] nxl:left-10 nxl:top-[35%] xl:top-[40%] sm:bg-none'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 xl:right-10  text-2xl rounded-full p-2 bg-white text-BlackAccent cursor-pointer md:bg-WhiteAccent xs:top-[35%] xs:right-2 sm:right-5 sm:top-[35%]  md:right-5 md:top-[35%] lg:right-10 lg:top-[35%] nxl:right-10 nxl:top-[35%] xl:top-[40%] sm:bg-none'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots Below Code */}
      <div className='flex top-4 justify-center py-5 lg:mt-4'>
        {slides.map((slide: any, slideIndex: React.Key | null | undefined) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer '
          >
            <RxDotFilled />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SkollegeHighlightsCarousel;
