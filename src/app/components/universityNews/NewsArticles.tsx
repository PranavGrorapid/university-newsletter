import React from "react";
import mobileNews from "../../../../public/images/newsletter/newsRectangleMob.png";
import ArticlenewsCard from "../articlenewsCard/page";

const NewsArticles = () => {

  const dummyNews = [
    {
      id: 1,
      image: "mobileNews",
      date: "June 1, 2023",
      readTime: "15 mins Read",
      likes: "250 Likes",
      title: "What I’ve Learned After Holding One Thousand Interviews",
      content: "How hiring works in startups and big companies",
    },

    {
      id: 2,
      image: "mobileNews",
      date: "June 5, 2023",
      readTime: "5 mins Read",
      likes: "50 Likes",
      title: "What I’ve Learned After Holding One Hundrend Interviews",
      content: "How hiring works in  Big companies",
    },

    {
      id: 3,
      image: "mobileNews",
      date: "June 15, 2023",
      readTime: "25 mins Read",
      likes: "550 Likes",
      title: "What I’ve Learned After Holding One Lakh Interviews",
      content: "How hiring works in  Startups companies",
    },

    {
      id: 4,
      image: "mobileNews",
      date: "June 15, 2023",
      readTime: "25 mins Read",
      likes: "550 Likes",
      title: "What I’ve Learned After Holding One Lakh Interviews",
      content: "How hiring works in  Startups companies",
    },

    {
      id: 5,
      image: "mobileNews",
      date: "June 15, 2023",
      readTime: "25 mins Read",
      likes: "550 Likes",
      title: "What I’ve Learned After Holding One Lakh Interviews",
      content: "How hiring works in  Startups companies",
    },

    {
      id: 6,
      image: "mobileNews",
      date: "June 15, 2023",
      readTime: "25 mins Read",
      likes: "550 Likes",
      title: "What I’ve Learned After Holding One Lakh Interviews",
      content: "How hiring works in  Startups companies",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-15 my-5 md:px-8 lg:px-10 ">
      {dummyNews.map((news) => {
        return (
          <ArticlenewsCard
            key={news.id}
           
            date={news.date}
            readTime={news.readTime}
            likes={news.likes}
            title={news.title}
            content={news.content}
          />
        );
      })}
    </div>
  );
};

export default NewsArticles;
