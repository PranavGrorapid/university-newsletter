import React from 'react'

import CourseDetailsCard from '../components/courseDetailsCard'
import amity from '../../../../public/images/lpulogo.svg'
import SecondaryButtons from './Buttons/SecondaryButtons'


const UniversityLearningPrograms = () => {

    const programs = [
        {
          logo: '/images/lpulogo.svg',
          programName: 'Computer Science',
          duration: '4 years',
          stream :'13 streams',
          rating: 3.5,
          numReviews:10,
        },
        {
          logo: '/images/lpulogo.svg',
          programName: 'Electrical Engineering',
          duration: '5 years',
          stream :'13 streams',
          rating: 3.2,
          numReviews:10,
        },
        {
            logo: '/images/lpulogo.svg',
            programName: 'Electrical Engineering',
            duration: '5 years',
            stream :'13 streams',
            rating: 3.2,
            numReviews:10,
          },
          {
            logo: '/images/lpulogo.svg',
            programName: 'Electrical Engineering',
            duration: '5 years',
            stream :'13 streams',
            rating: 3.2,
            numReviews:10,
          },
          {
            logo: '/images/lpulogo.svg',
            programName: 'Electrical Engineering',
            duration: '5 years',
            stream :'13 streams',
            rating: 4,
            numReviews:10,
          },
          {
            logo: '/images/lpulogo.svg',
            programName: 'Electrical Engineering',
            duration: '5 years',
            stream :'13 streams',
            rating: 3,
            numReviews:10,
          },
        // Add more programs here
      ]





  return (
    <div className='container mx-auto py-10 px-4 md:px-8 bg-WhiteAccent '>

<div className="text-slate-900 text-2xl font-semibold leading-loose md:text-[26px] md:leading-10 lg:text-[34px] xl:text-[40px]">Top Learning Programs</div>





  



    </div>
  )
}

export default UniversityLearningPrograms
