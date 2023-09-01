




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
      {/* Other content */}
      <MiniNavbar navLinks={navLinks}  /> 
      {/* Other content */}
    </div>
  );
};

export default MiniNav;
















