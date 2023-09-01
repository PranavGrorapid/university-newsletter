import React from "react";

const Footer = () => {
  const moreToExploreData = [
    "Online & Distance MBA",
    "Online & Distance UG Courses",
    "Online & Distance PG Courses",
    "Online & Distance Best colleges",
    " Online & Distance MBA",
    "Online & Distance PG Courses",
    " Online & Distance Best colleges",
    "Online & Distance UG Courses",
    " Online & Distance MBA",
    "Online & Distance UG Courses",
    "Online & Distance UG Courses",
  ];

  const toolsAndResearchData = [
    "Career Compass",
    "Write a review",
    "Qna Forum",
    // ... add more items as needed
  ];

  const bestUniversitiesData = [
    "University 1",
    "University 2",
    "University 3",
    "University 1",
    "University 2",
    "University 3",
    "University 2",
    "University 3",
    // ... add more items as needed
  ];

  const contactOptions = [
    {
      label: "./images/HomePage/Footer/phone.svg",
      value: "info@learningshala.in",
    },
    { label: "./images/HomePage/Footer/at.svg", value: "+91 83698 14295" },
  ];

  const secondFooterLinks = [
    "Privacy Policy",
    "Terms of use",
    "Legal",
    "Site Map",
  ];

  const socialIcons = [
    "./images/HomePage/Footer/instaa.svg",
    "./images/HomePage/Footer/fb.svg",
    "./images/HomePage/Footer/twitter.svg",
    "./images/HomePage/Footer/linkedIn.svg",
  ];

  const buttons = ["New Student1", "New Student2", "New Student3"];

  return (
    <div>
      <div className="bg-AccentMirage text-WhiteAccent py-10">
        <div className="md:flex lg:justify-between md:px-5 lg:px-10">
          <div className="flex flex-col space-y-4 ps-10 md:ps-0">
            <div className="text-white md:text-sm lg:text-lg font-bold mt-10">
              More to Explore
            </div>
            <ul className="flex flex-col space-y-2">
              {moreToExploreData.map((item, index) => (
                <li key={index}>
                  <div className="text-white text-sm md:text-xs lg:text-sm font-normal leading-[19px]">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools and Research section */}
          <div className="flex flex-col space-y-4 my-10 ps-10 md:ps-0 md:my-0">
            <div className="text-white text-lg md:text-sm lg:text-lg font-bold sm:pt-10">
              Tools and Research
            </div>
            <ul className="flex flex-col space-y-2">
              {toolsAndResearchData.map((item, index) => (
                <li key={index}>
                  <div className="text-white text-sm md:text-xs lg:text-sm font-normal leading-[19px]">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Universities section */}
          <div className="flex flex-col space-y-4 my-10 ps-10 md:ps-0 md:my-0">
            <div className="text-white text-lg md:text-sm lg:text-lg font-bold sm:pt-10">
              Best Universities
            </div>
            <ul className="flex flex-col space-y-2">
              {bestUniversitiesData.map((item, index) => (
                <li key={index}>
                  <div className="text-white text-sm md:text-xs lg:text-sm font-normal leading-[19px]">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us section */}

          {/* contact us section starts */}

          <div>
            <div className="text-white text-lg font-bold ms-10 my-5 md:ms-0 md:text-sm lg:text-lg">
              Contact us
            </div>

            <div className="flex justify-between items-center container mx-auto px-3 space-x-1">
              {buttons.map((button) => {
                return (
                  <button
                    key={button}
                    className=" bg-WhiteAccent text-PrimaryBlue  px-[14px] py-[8px] bg-white rounded-sm flex-col justify-start items-center gap-[6.97px] inline-flex border border-blue-600 focus:outline-none focus:border-blue-400"
                  >
                    <div className="text-blue-600 text-[10px] font-semibold leading-none">
                      {button}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col ps-10 my-10 space-y-5">
              {contactOptions.map((contactDetails) => {
                return (
                  <div
                    className="flex items-center space-x-5"
                    key={contactDetails.label}
                  >
                    <div>
                      <img src={contactDetails.label} alt="at" />
                    </div>

                    <div className="text-white text-sm font-medium leading-none">
                      {contactDetails.value}
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center space-x-5">
                <div>
                  <img
                    src="./images/HomePage/Footer/map-marker-radius.svg"
                    alt="phone"
                  />
                </div>

                <div className="text-white text-sm font-medium leading-snug">
                  Office address, XYZ Street,
                  <br />
                  Suite Chambers,
                  <br />
                  Houston, Texas
                  <br />
                  1100123
                </div>
              </div>
            </div>
          </div>

          {/* contact us section ends */}
        </div>
      </div>

      <div className="bg-WhiteAccent flex flex-col space-y-4 py-10 ps-10 md:flex md:justify-between">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-around md:items-center">
          <div className="space-y-4">
            <div className="text-zinc-800 text-sm font-bold">
              Follow our Blog
            </div>

            <div className="text-zinc-800 font-normal xs:text-xs sm:text-sm">
              Copyright © 2023 Skollege. All rights reserved.
            </div>
            <div className="flex space-x-3">
              {secondFooterLinks.map((links) => {
                return (
                  <div key={links} className="text-black text-sm font-semibold">
                    {links}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex justify-start item-start ">
            {socialIcons.map((icon, iconIndex) => (
              <div key={iconIndex} className="ms-4">
                <img src={icon} alt="social media icons" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
