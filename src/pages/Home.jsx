import React, { useState } from "react";
import "../styles/Home.css";
import landing from "../assets/images/landing.jpg";
import Manu_unit1 from "../assets/images/Manu_unit1.jpg";
import Manu_unit2 from "../assets/images/Manu_unit2.jpg";
import Manu_unit3 from "../assets/images/Manu_unit3.jpg";
import Manu_unit6 from "../assets/images/Manu_unit6.jpg";
import Manu_unit5 from "../assets/images/Manu_unit5.jpg";
import Company_logo from "../assets/images/Company_logo.png";

const images = [Manu_unit1, Manu_unit2, Manu_unit3, Manu_unit6, Manu_unit5];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="home">
      <div className="landing-container">
        <img className="landing" src={landing} alt="Landing" />
        <div className="overlay">
          <img className="company_logo" src={Company_logo} alt="Company Logo" />
          <button className="home_button">
            <span className="home_button_text">Home</span>
            <span className="home_button_icon material-symbols-outlined">
              arrow_forward
            </span>
          </button>
          <h3 className="home_text">
            Experience the Finest Dehydrated Vegetables and Fruits, Sourced from
            the Best
          </h3>
        </div>
        <span onClick={handlePrevClick} className="material-symbols-outlined arrow_back">arrow_back</span>
        <img
          src={images[currentIndex]}
          className="manufacturing_unit"
          alt="Manufacturing Unit"
        />
        <span onClick={handleNextClick} style={{ fontSize: "40px" }} className="home_button_icon material-symbols-outlined arrow_for">
          arrow_forward
        </span>
      </div>
    </div>
  );
};

export default Home;
