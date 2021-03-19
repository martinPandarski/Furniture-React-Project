import React from 'react';

import { Fade } from 'react-slideshow-image';
import './Home.css'
import Slider from './Slide/Slider';
import HomeCards from './HomeCards/HomeCards'

const Home = ({furniture, cards}) => {
  
    return (
      <div>
      <div className="carousel">
        <Fade duration="3000" >
          {furniture.map(x => 
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
          {cards.map(y => 
          <HomeCards
            key={y.objectId}
            imageCard={y.imageCard}
            type={y.type}
          />
          )}
      </div>
  </div>

    )
};

export default Home;