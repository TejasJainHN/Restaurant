import React from "react";
import "./TodaysSpecial.css";
import BottleImage from "../assets/Bottle.jpg"; // Replace with the path to your bottle image

const TodaysSpecial = () => {
  return (
    <div className="todays-special-container">
      <h2 className="todays-special-heading">Today's Special</h2>
      <div className="todays-special-content">
        <div className="left-section">
          <div className="wine-beer">
            <h3>Wine & Beer</h3>
            <ul>
              <li>
                <span>Red Wine</span> <span>400Rs</span>
              </li>
              <li>
                <span>White Wine</span> <span>1200Rs</span>
              </li>
              <li>
                <span>Beer</span> <span>700Rs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="center-section">
          <img src={BottleImage} alt="Bottle" className="bottle-image" />
        </div>

        <div className="right-section">
          <div className="cocktails">
            <h3>Cocktails</h3>
            <ul>
              <li>
                <span>Margarita</span> <span>600Rs</span>
              </li>
              <li>
                <span>Mojito</span> <span>900Rs</span>
              </li>
              <li>
                <span>Old Fashioned</span> <span>750Rs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysSpecial;
