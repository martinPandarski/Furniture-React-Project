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
          console.log(reviews)
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
         
          {Object.keys(this.state.reviews).map(id =>
          <Review
            key={id}
            profilePicture={this.state.reviews[id].profilePicture}
            reviewText={this.state.reviews[id].reviewText}
            name={this.state.reviews[id].name}
            job={this.state.reviews[id].job}
            />
          )}
          </Carousel>
          
      </div>
    )
          }
};
  

export default Reviews;