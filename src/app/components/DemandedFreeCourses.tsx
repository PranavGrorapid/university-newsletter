import React from "react";
import DemandedCoursesCard from "./demandedCoursesCard";


const DemandedFreeCourses = () => {
 

  const programs = [
    {
      logo: "/images/AMITY.png",
      programName: "B.Tech program for the working professional",
      duration: "4 years",
      totalUsers: "50,000 + learners enrolled",
      startDate: "june 30 2023",
    },
    {
      logo: "/images/AMITY.png",
      programName: "B.Tech program for the working professional",
      duration: "5 years",
      totalUsers: "50,000 + learners enrolled",
      startDate: "june 30 2023",
    },
    {
      logo: "/images/AMITY.png",
      programName: "B.Tech program for the working professional",
      duration: "5 years",
      totalUsers: "50,000 + learners enrolled",
      startDate: "june 30 2023",
    },
    {
      logo: "/images/AMITY.png",
      programName: "B.Tech program for the working professional",
      duration: "5 years",

      totalUsers: "50,000 + learners enrolled",
      startDate: "june 30 2023",
    },
    {
      logo: "/images/AMITY.png",
      programName: "B.Tech program for the working professional",
      duration: "5 years",

      totalUsers: "50,000 + learners enrolled",
      startDate: "june 30 2023",
    },
    {
      logo: "/images/AMITY.png",
      programName: "B.Tech program for the working professional",
      duration: "5 years",

      totalUsers: "50,000 + learners enrolled",
      startDate: "june 30 2023",
    },
    // Add more programs here
  ];

  return (
    <div className=" container mx-auto bg-WhiteAccent  px-5 xs:py-5  pe-4 py-8 ">
        
     


      <div className="grid  xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-10 ">
        {programs.map((program, index) => (
          <DemandedCoursesCard
            key={index}
            logo={program.logo}
            programName={program.programName}
            duration={program.duration}
            totalUsers={program.totalUsers}
            startDate={program.startDate}
          />
        ))}
      </div>




      
    </div>
  );
};

export default DemandedFreeCourses;
