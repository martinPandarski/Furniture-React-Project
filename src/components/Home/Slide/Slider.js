import React from "react";
import "./Slider.css";
const Slider = ({ name, pictureLink }) => {
  return(
  <div className="each-slide">
    <div style={{ backgroundImage: `url(${pictureLink})` }}>
      <p>{name}</p>
    </div>
  </div>
  );
};

export default Slider;
