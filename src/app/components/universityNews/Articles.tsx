"use client";

import React, { useEffect, useState } from "react";
import ArticleCard from "../articleCard/page";
import { RxDotFilled } from "react-icons/rx";
import NewsCard from "../NewsCard/NewsCard";

const Articles = () => {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);

  // dummy array of news

  const dummyNews = [
    {
      id: 1,

      date: "June 1, 2023",
      image: "",
      readTime: "15 mins Read",
      likes: "250 Likes",
      title: "LPU Online BTech Counselling 2023 Begins",
      content:
        "LPU Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. ",
    },

    {
      id: 2,
      image: "",
      date: "March 1, 2023",
      readTime: "25 mins Read",
      likes: "350 Likes",
      title: "Amity Online BTech Counselling 2023 Begins",
      content:
        "Amity Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. ",
    },

    {
      id: 3,
      image: "",
      date: "May 1, 2023",
      readTime: "5 mins Read",
      likes: "3500 Likes",
      title: "Exergic Online BTech Counselling 2023 Begins",
      content:
        "Exergic Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. ",
    },

    {
      id: 4,
      image: "",
      date: "June 1, 2023",
      readTime: "15 mins Read",
      likes: "250 Likes",
      title: "Udemy Online BTech Counselling 2023 Begins",
      content:
        "Udemy Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. ",
    },

    {
      id: 5,
      image: "",
      date: "March 1, 2023",
      readTime: "25 mins Read",
      likes: "350 Likes",
      title: "UnAcademy Online BTech Counselling 2023 Begins",
      content:
        "UnAcademy Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. ",
    },

    {
      id: 6,
      image: "",
      date: "May 1, 2023",
      readTime: "5 mins Read",
      likes: "3500 Likes",
      title: "Byjus Online BTech Counselling 2023 Begins",
      content:
        "Byjus Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. ",
    },
  ];

  // when we click on this button next set of cards will come

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentCard(slideIndex);
  };

  // using useeffect hook to give the number of cards each device needed

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 767) {
        setCardsToShow(1);
      } else if (screenWidth >= 767 && screenWidth <= 1200) {
        setCardsToShow(2);
      } else if (screenWidth >= 1200) {
        setCardsToShow(3);
      }
    };

    // Initial setup on component mount
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [cardsToShow]);

  // using the slice method to control the list of cards to display

  const displayedUsers = dummyNews.slice(
    currentCard,
    currentCard + cardsToShow
  );

  return (
    <div className="flex flex-col py-6 md:py-10 bg-WhiteAccent  relative px-6 md:px-8 lg:px-10  ">
      <div className="flex justify-start mx-auto md:mx-0 md:gap-10">
        {/* passing the dummy news data to article card component */}

        {displayedUsers.map((dummyNews, index) => (
          <ArticleCard
            key={dummyNews.id}
            image={dummyNews.image}
            date={dummyNews.date}
            readTime={dummyNews.readTime}
            likes={dummyNews.likes}
            title={dummyNews.title}
            content={dummyNews.content}
          />
        ))}
      </div>

      {/* this code is used for generating dots below */}

      <div className="flex justify-center mt-5">
        {Array.from({ length: Math.ceil(dummyNews.length / cardsToShow) }).map(
          (_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex * cardsToShow)}
              className="text-2xl cursor-pointer text-PrimaryBlue">
              <RxDotFilled />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Articles;
