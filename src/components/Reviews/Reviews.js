import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Review from './Review/Review'
import './Reviews.css'

const Reviews = ({reviews}) => {
    return (
      <div>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
          {reviews.map(x => 
          <Review
            key={x.objectId}
            reviewText={x.reviewText}
            name={x.name}
            job={x.job}
            />
          )}
          </Carousel>
          
      </div>
    )
};
  

export default Reviews