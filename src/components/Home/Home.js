import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Fade } from 'react-slideshow-image';
import './Home.css'
import Slider from './Slide/Slider';
import HomeCards from './HomeCards/HomeCards'
import * as cardsService from '../../services/cardsService'
import * as furnitureService from '../../services/furnitureService';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
          furniture: [],
          cards: [],  
          
        };
  }
  componentDidMount(){
       furnitureService.getAll()
        .then(furniture => {
          this.setState({furniture})
        }) 
        cardsService.getHomeCards()
        .then(cards => {
          this.setState({cards})
      })
    }
  render(){
    return (
      <div>
      <div className="carousel">
        <Fade duration="3000" >
          {this.state.furniture.map(x => 
          <Slider
            key={x.objectId}
            description={x.description}
            name={x.name}
            pictureLink={x.pictureLink}
            />
          )}
        </Fade>
      </div>
            <div className="gallery-heading">
          <h1>GALLERY</h1>
            </div>
      <div className="gallery">
          {this.state.cards.map(y => 
          <HomeCards
            key={y.objectId}
            imageCard={y.imageCard}
            type={y.type}
          />
          )}
      </div>
      <div className="gallery-footer">
          <h4>Click <Link to="/catalog">here</Link> to check out our Catalog!</h4>
      </div>
  </div>
    )
  }
}

export default Home;