import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Home.css'
const slideImages = [
  '/02.jpeg',
  '/1_fullHD.jpeg',
  '/sofa.png'
  
];

const Home = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span><a href="/edisikvo">New addition</a></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>OPA</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Home;