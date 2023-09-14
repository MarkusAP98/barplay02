import React from "react";
import barplay from "../../assets/images_slider/barplay.webp";
import biljard from "../../assets/images_slider/biljard.jpg";
import food from "../../assets/images_slider/food.webp";
import markusBat from "../../assets/images_slider/markus bat.webp";
import './Images.css'

const Images = () => {
  // Sample image data

  return (
    <div className="barplay__img-slider">
      <h1>Kuvia Ravintolasta!</h1>
      <div className="img-slider">
        <img className="image" src={barplay} />
        <img className="image" src={biljard} />
        <img className="image" src={food} />
        <img className="image" src={markusBat} />
      </div>
    </div>
  );
};

export default Images;
