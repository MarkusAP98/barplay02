import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Images.css";

import barplay from "../../assets/images_slider/barplay.webp";
import food from "../../assets/images_slider/food.webp";
import markusBat from "../../assets/images_slider/markus bat.webp";
import nina from "../../assets/images_slider/bartender_nina.jpg";
import burgers from "../../assets/images_slider/dble_burgers.jpg";
import furniture_1 from "../../assets/images_slider/furniture_1.jpg";
import furniture_3 from "../../assets/images_slider/furniture_3.jpg";
import people from "../../assets/images_slider/happy_people.jpg";
import people_2 from "../../assets/images_slider/happyPeople_2.jpg";

const Images = () => {
  const images = [
    barplay,
    food,
    markusBat,
    nina,
    burgers,
    furniture_1,
    furniture_3,
    people,
    people_2,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };


  return (
    <div className="slick-slider">
      <h2>Multiple items</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Images;
