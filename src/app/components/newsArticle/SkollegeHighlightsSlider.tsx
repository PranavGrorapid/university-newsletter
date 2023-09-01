'use client'


import React, { useEffect, useState } from "react";
import Image from "next/image";

import mobile1 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/mobile_news (1).png";
import mobile2 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/mobile_image2.webp";
import mobile3 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/mobile_image3.webp";

import tablet1 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/tablet_news.png";
import tablet2 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/tablet_image2.webp";
import tablet3 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/tablet_image3.webp";

// Import other tablet images

import laptop1 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/laptop_news.png";
import laptop2 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/laptop_image2.webp";
import laptop3 from "../../../../public/images/HomePage/SkollegeHighlightsSlider/laptop_image3.webp";
import SkollegeHighlightsCarousel from "../skollegeHighlightsCarousel";



const SkollegeHighlightsSlider = () => {
  const mobileSlides: any = [mobile1, mobile2, mobile3];

  const tabletSlides: any = [
    // Tablet image paths (URLs) here...

    tablet1,
    tablet2,
    tablet3,
  ];

  const desktopSlides: any = [
    // Desktop image paths (URLs) here...

    laptop1,
    laptop2,
    laptop3,
  ];

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 767) {
        setSlides(mobileSlides);
      } else if (screenWidth <= 1023) {
        setSlides(tabletSlides);
      } else {
        setSlides(desktopSlides);
      }
    };

    // Initial setup on component mount
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (slides.length === 0) {
    return null; // Return something else, loading indicator, or an empty component
  }

  return <SkollegeHighlightsCarousel slides={slides} />;
};

export default SkollegeHighlightsSlider;
