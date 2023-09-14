import React from "react";
import barplay from "../../assets/images_slider/barplay.webp";
import biljard from "../../assets/images_slider/biljard.jpg";
import food from "../../assets/images_slider/food.webp";
import markusBat from "../../assets/images_slider/markus bat.webp";
import nina from "../../assets/images_slider/bartender_nina.jpg";
import burgers from "../../assets/images_slider/dble_burgers.jpg";
import furniture_1 from "../../assets/images_slider/furniture_1.jpg";
import furniture_2 from "../../assets/images_slider/furniture_2.jpg";
import furniture_3 from "../../assets/images_slider/furniture_3.jpg";
import people from "../../assets/images_slider/happy_people.jpg";
import people_2 from "../../assets/images_slider/happyPeople_2.jpg";
import "./Images.css";

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
        <img className="image" src={nina} />
        <img className="image" src={furniture_1} />
        <img className="image" src={furniture_2} />
        <img className="image" src={furniture_3} />
        <img className="image" src={burgers} />
        <img className="image" src={people} />
        <img className="image" src={people_2} />
      </div>
    </div>
  );
};

export default Images;
