import React, { useState } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap";
import "../styles/Home.css";
import landing1 from "../assets/images/landing1.jpg";
import Manu_unit1 from "../assets/images/Manu_unit1.jpg";
import Manu_unit2 from "../assets/images/Manu_unit2.jpg";
import Manu_unit3 from "../assets/images/Manu_unit3.jpg";
import Manu_unit6 from "../assets/images/Manu_unit6.jpg";
import Manu_unit5 from "../assets/images/Manu_unit5.jpg";
import { useNavigate } from "react-router-dom";

const images = [Manu_unit1, Manu_unit2, Manu_unit3, Manu_unit6, Manu_unit5];

const Home = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/home");
  };

  return (
    <div className="container-fluid mx-0 px-0  " id="home">
      <div className="row mx-0 px-0 align-items-center ">
        <div className="col-12 col-md-6 " id="home_section">
          <button
            className="btn btn-success text-center"
            id="home_button"
            onClick={handleClick}
          >
            <span>Home</span>
            <span className="home_button_icon material-symbols-outlined">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="d-none d-md-inline col-md-6 px-0 mx-0  ">
          <img src={Manu_unit1} className="col-12 manufacturing_unit" alt="Manufacturing Unit" />
        </div>
      </div>
    </div>
  );
};

export default Home;
