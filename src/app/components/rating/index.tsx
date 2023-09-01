import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating}:any) => {
  return (
    <div className="flex">
      <span className="me-1 " >
        {rating >= 1 ? (
          <FaStar className='text-PrimaryBlue' />
        ) : rating >= 0.5 ? (
          <FaStarHalfAlt  className='text-PrimaryBlue'/>
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="me-1">
        {rating >= 2 ? (
          <FaStar className='text-PrimaryBlue' />
        ) : rating >= 1.5 ? (
          <FaStarHalfAlt  className='text-PrimaryBlue'/>
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="me-1">
        {rating >= 3 ? (
          <FaStar className='text-PrimaryBlue' />
        ) : rating >= 2.5 ? (
          <FaStarHalfAlt className='text-PrimaryBlue' />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className="me-1">
        {rating >= 4 ? (
          <FaStar className='text-PrimaryBlue' />
        ) : rating >= 3.5 ? (
          <FaStarHalfAlt className='text-PrimaryBlue'/>
        ) : (
          <FaRegStar />
        )}

        {/* <span className="ms-1 me-2">
          {rating >= 5 ? (
            <FaStar className='text-PrimaryBlue' />
          ) : rating >= 4.5 ? (
            <FaStarHalfAlt className='text-PrimaryBlue'  />
          ) : (
            <FaRegStar />
          )}
        </span> */}

      
      </span>
    </div>
  );
};

export default Rating;