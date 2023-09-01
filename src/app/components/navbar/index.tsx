"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [dropdownStates, setDropdownStates] = useState([
    false, // Post graduation
    false, // Undergraduate
    false, // Upskilling Certifications
    false, // Study Abroad
    false, // Advanced Diploma
  ]);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index: any) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const toggleDropdowns = (index: any) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);

    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navbarOptions = [
    {
      title: "Post graduation",
      options: ["option 1", "option 2"],
    },
    {
      title: "Undergraduate",
      options: ["option 1", "option 2"],
    },
    {
      title: "Upskilling Certifications",
      options: ["option 1", "option 2"],
    },
    {
      title: "Study Abroad",
      options: ["option 1", "option 2"],
    },
    {
      title: "Advanced Diploma",
      options: ["option 1", "option 2"],
    },
  ];

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white bg-WhiteAccent">
      <div>
        <Image
          src="/images/NavbarLogo.png"
          alt="Picture of the logo"
          width={140}
          height={140}
          priority
        />
      </div>

      <ul className="hidden nxl:flex md:items-center md:space-x-5">
        {navbarOptions.map((option, index) => (
          <li key={index}>
            <div className="relative group ">
              <Link
                href="#"
                className="hover:text-gray-500 text-slate-900 text-sm font-semibold group flex items-center pxl:text-xs"
                onClick={() => toggleDropdown(index)}
              >
                {option.title}{" "}
                <span className="ml-1 text-gray-400 text-2xl">
                  <RiArrowDropDownLine />
                </span>
              </Link>

              {dropdownStates[index] && (
                <ul className="absolute space-y-2 bg-white shadow-lg ms-5 ps-2 left-5 top-5 mt-6">
                  {option.options.map((dropdownOption, subIndex) => (
                    <li key={subIndex} className="p-2">
                      <Link
                        href="#"
                        className="hover:text-gray-500 text-slate-900 text-sm font-semibold"
                      >
                        {dropdownOption}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}

        <button className="bg-PrimaryBlue  text-white px-5 py-2 rounded-full hover:Hover text-WhiteAccent font-semibold sm:block xs:w-[150px] md:hidden nxl:block nxl:w-[100px]">
          Sign in
        </button>
      </ul>

      <div onClick={handleNav} className="block nxl:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 mt-20"
            : "ease-in-out duration-500 fixed left-[-100%] mt-20"
        }
      >
        <div className="flex flex-col space-y-8 px-5 py-5">
          {navbarOptions.map((option, index) => (
            <li key={index}>
              <div className="relative group ">
                <Link
                  href="#"
                  className="hover:text-gray-500 text-slate-900 text-sm font-semibold group flex items-center pxl:text-xs"
                  onClick={() => toggleDropdowns(index)}
                >
                  {option.title}{" "}
                  <span className="ml-1 text-gray-400 text-2xl">
                    <RiArrowDropDownLine />
                  </span>
                </Link>

                {dropdownStates[index] && activeDropdown === index && (
                  <ul className="absolute space-y-2 bg-white shadow-lg ms-5 ps-8 left-5 top-5 mt-6">
                    {option.options.map((dropdownOption, subIndex) => (
                      <li key={subIndex} className="p-2">
                        <Link
                          href="#"
                          className="hover:text-gray-500 text-slate-900 text-sm font-semibold"
                        >
                          {dropdownOption}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </div>

        <button className="bg-PrimaryBlue  text-white px-5 py-2 rounded-full hover:Hover text-WhiteAccent font-semibold sm:block xs:w-[150px]  nxl:block nxl:w-[100px] mt-10 mx-3">
          Sign in
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
