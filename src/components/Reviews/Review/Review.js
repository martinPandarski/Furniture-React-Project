import React from "react";
import './Review.css';

const Review = ({ name, job, reviewText }) => {
  return(
    <div>
    <img src="about-page.jpeg" alt="text" />
      <div className="myCarousel">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>
          {reviewText}
        </p>
      </div>
    </div>
  );
};

export default Review;
