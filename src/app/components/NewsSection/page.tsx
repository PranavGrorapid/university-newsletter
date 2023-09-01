"use client"

import React, { useState } from 'react'
import mobileNews from '../../../../public/images/newsletter/newsRectangleMob.png'
import Image from 'next/image'
import NewsCard from '../NewsCard/NewsCard'
import { RxDotFilled } from 'react-icons/rx'

const NewsSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

 
  const dummyNews = [
    {
      id: 1,
      image:mobileNews,
      date: 'June 1, 2023',
      readTime: '15 mins Read',
      likes: '250 Likes',
      title: 'LPU Online BTech Counselling 2023 Begins; Slot Booking Open till June 15',
      content: 'LPU Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. Interested candidates can book their slots by June 15. Check further details below......'
    },


    {
      id: 2,
      image:mobileNews,
      date: 'March 1, 2023',
      readTime: '25 mins Read',
      likes: '350 Likes',
      title: 'Amity Online BTech Counselling 2023 Begins; Slot Booking Open till June 25',
      content: 'Amity Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. Interested candidates can book their slots by June 15. Check further details below......'
    },

    {
      id: 3,
      image:mobileNews,
      date: 'May 1, 2023',
      readTime: '5 mins Read',
      likes: '3500 Likes',
      title: 'Exergic Online BTech Counselling 2023 Begins; Slot Booking Open till June 25',
      content: 'Exergic Online has released the JET BTech Counselling Process Schedule for offering admissions to the BTech program. Interested candidates can book their slots by June 15. Check further details below......'
    },


  ]

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };








  return (
    <div className='flex flex-col py-6 md:py-5 bg-WhiteAccent  relative  '>
    <div className=''>
      <NewsCard
        key={dummyNews[currentIndex].id}
        image={dummyNews[currentIndex].image}
        date={dummyNews[currentIndex].date}
        readTime={dummyNews[currentIndex].readTime}
        likes={dummyNews[currentIndex].likes}
        title={dummyNews[currentIndex].title}
        content={dummyNews[currentIndex].content}
      />

</div>
    

      <div className="flex   justify-center py-5 lg:mt-4  ">
        {dummyNews.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? 'text-PrimaryBlue' : 'text-gray-500'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
   
  </div>
  )
}

export default NewsSection
