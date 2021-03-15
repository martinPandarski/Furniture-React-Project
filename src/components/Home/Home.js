import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Home.css'
import Slider from './Slide/Slider'

const Home = ({furniture}) => {
    return (
      <div>
        <Slide easing="ease">
          {furniture.map(x => 
          <Slider
            key={x.objectId}
            description={x.description}
            name={x.name}
            pictureLink={x.pictureLink}
            />
          )}
        </Slide>
          
      </div>
    )
};

export default Home;