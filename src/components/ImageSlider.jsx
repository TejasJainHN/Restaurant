import React, { useState } from "react";
import "./ImageSlider.css";
import Image1 from "../assets/food1.jpg";
import Image2 from "../assets/food2.jpg";
import Image3 from "../assets/food3.jpg";
import Image4 from "../assets/food4.jpg";
import Image5 from "../assets/food5.jpg";
import Image6 from "../assets/food6.jpg";
import Image7 from "../assets/food7.jpg";
import Image8 from "../assets/food8.jpg";

const ImageSlider = () => {
  const images = [Image1, Image2, Image3, Image4, Image5,Image6,Image7,Image8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="slider">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Food ${currentIndex + index + 1}`}
            className="slide-image"
          />
        ))}
      </div>
      <button className="slider-button right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
