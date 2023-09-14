import React, { useState } from "react";
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

  const itemsToShow = 3;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const getImagesToDisplay = () => {
    const displayedImages = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentImageIndex + i) % images.length;
      displayedImages.push(images[index]);
    }
    return displayedImages;
  };

  return (
    <div className="barplay__img-slider">
      <h1>Kuvia Ravintolasta!</h1>
      <div className="img-slider">
        <button onClick={prevImage} className="slider-button">
          Previous
        </button>
        {getImagesToDisplay().map((image, index) => (
          <img key={index} className="image" src={image} alt={`Image ${index}`} />
        ))}
        <button onClick={nextImage} className="slider-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Images;
