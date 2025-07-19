import React from "react";
import "./FlavorSection.css";
import FlavourImage from "../assets/flavour.jpg"; // Replace with your image path

const FlavorSection = () => {
  return (
    <div className="flavor-section">
      <div className="flavor-text">
        <h2>Chase the new flavour</h2>
        <h1>
          THE KEY <br /> TO FINE <br /> DINING
        </h1>
      </div>
      <div className="flavor-image-container">
        <img src={FlavourImage} alt="Fine Dining" className="flavor-image" />
        <div className="gold-border top-right"></div>
        <div className="gold-border bottom-left"></div>
      </div>
    </div>
  );
};

export default FlavorSection;
