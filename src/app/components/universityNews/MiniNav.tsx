




import React from "react";
import MiniNavbar from "../miniNavbar/page";

const navLinks = [
  "Overview",
  "Courses & Fees",
  "Examination Pattern",
  "Placements",
  "Financial Aid",
  "News & Articles",
  "Financial Aid",
  "News & Articles",
];



const MiniNav = () => {
  return (
    <div>
     
      <MiniNavbar navLinks={navLinks}  /> 
      
    </div>
  );
};

export default MiniNav;
















