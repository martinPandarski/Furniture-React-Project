import React from "react";
import "./Slider.css";
const Slider = ({ name, description, pictureLink }) => {
  return(
  <div className="each-slide">
    <div style={{ backgroundImage: `url(${pictureLink})` }}>
      <span>{name}</span>
    </div>
  </div>
  );
};

export default Slider;
