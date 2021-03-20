import React, {Component} from "react";
import * as reviewsService from '../../services/reviewsService';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Review from './Review/Review'
import './Reviews.css'

class Reviews extends Component {
  constructor(props){
    super(props);
    this.state={
      reviews: []
    }
    
  }
  componentDidMount(){
    reviewsService.getReviews()
        .then(reviews => {
          this.setState({reviews})
        })
  }

  render(){
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
          {this.state.reviews.map(x => 
          <Review
            key={x.objectId}
            reviewText={x.reviewText}
            name={x.name}
            job={x.job}
            profilePic={x.profilePic}
            />
          )}
          </Carousel>
          
      </div>
    )
          }
};
  

export default Reviews;