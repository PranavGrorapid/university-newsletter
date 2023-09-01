import LinkItem from "@/app/components/LinkItem/LinkItem";
import NewsSection from "@/app/components/NewsSection/page";
import Articles from "@/app/components/universityNews/Articles";
import Footer from "@/app/components/footer";
import MiniNavbar from "@/app/components/miniNavbar/page";
import Navbar from "@/app/components/navbar";
import SkollegeHighlightsSlider from "@/app/components/newsArticle/SkollegeHighlightsSlider";
import MiniNav from "@/app/components/universityNews/MiniNav";
import React from "react";
import NewsArticles from "@/app/components/universityNews/NewsArticles";
import ScholarshipBanners from "@/app/components/scholarshipBanners";
import ScholarshipBanner from "@/app/components/scholarshipBanner";
import UniversityLearningPrograms from "@/app/components/UniversityLearningPrograms";
import DemandedFreeCourses from "@/app/components/DemandedFreeCourses";

const page = () => {
  const links = ["Home", "Universities", "LPU Online"];

  return (
    <div className="bg-WhiteAccent pb-32">
      <Navbar />
      <SkollegeHighlightsSlider />

      <MiniNav />

      <div className="bg-WhiteAccent  flex items-center py-7 space-x-3 px-6 md:px-8 lg:px-10  md:pt-10 md:pb-6  nxl:px-16 ">
        {links.map((link) => (
          <LinkItem key={link} text={link} />
        ))}
      </div>

      <NewsSection />

      <div className="bg-WhiteAccent">
        <div className=" text-TitleText font-nunitoSans text-2xl py-5 font-bold leading-loose px-6 md:text-[31.27px]  md:leading-[37.52px] md:tracking-tight md:px-8 lg:px-10 lg:text-[44px]  lg:leading-[52.80px]  ">
          Articles on LPU Online
        </div>

        <Articles />
      </div>

      <div className="bg-WhiteAccent">
        <div className=" text-TitleText font-nunitoSans text-2xl py-5 font-bold leading-loose px-6 md:text-[31.27px]  md:leading-[37.52px] md:tracking-tight md:px-8 lg:px-10 lg:text-[44px]  lg:leading-[52.80px]  ">
          Popular Articles
        </div>

        <NewsArticles />
      </div>

      <div className="md:hidden py-5 bg-WhiteAccent">
        <ScholarshipBanner
          title="Earn up to 100% scholarship"
          description="Skollege offers an option to earn up to 100% scholarship to selected students based on the test results. Be the first to grab it now"
          buttonText="Enroll Now"
          registrationCount={290}
        />
      </div>

      <div className="py-10 bg-WhiteAccent">
        <ScholarshipBanners />
      </div>

      <div className="bg-WhiteAccent">
        <div
          className=" px-8 text-TitleText font-nunitoSans mt-5 xs:text-xl sm:text-2xl font-bold 
       md:text-[32px] md:leading-10
         lg:text-slate-900  lg:text-[44px]  lg:font-bold  lg:leading-[55px]
        ">
          Top Learning Programs
        </div>

        <DemandedFreeCourses />
      </div>

      <Footer />
    </div>
  );
};

export default page;
