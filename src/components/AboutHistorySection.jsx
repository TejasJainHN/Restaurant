import React from "react";
import "./AboutHistorySection.css";
import KnifeImage from "../assets/knife.webp"; // Replace with your knife image path

const AboutHistorySection = () => {
  return (
    <div className="about-history-section">
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          We believe in bringing you the finest culinary experiences crafted
          with care, passion, and the freshest ingredients.
        </p>
        <button className="know-more-button">Know More</button>
      </div>
      <div className="knife-section">
        <img src={KnifeImage} alt="Knife" className="knife-image" />
      </div>
      <div className="history-section">
        <h2>Our History</h2>
        <p>
          From humble beginnings to becoming a celebrated dining destination, our
          story is as rich as our flavors.
        </p>
        <button className="know-more-button">Know More</button>
      </div>
    </div>
  );
};

export default AboutHistorySection;
