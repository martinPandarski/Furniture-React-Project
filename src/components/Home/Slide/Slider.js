import React from "react";
import "./Slider.css";
const Slider = ({ name, pictureLink }) => {
  return(
  <div className="each-fade">
    <div className="image-container">
            <img src={pictureLink} alt="furniturePicture" />
          </div>
  </div>
  );
};

export default Slider;


