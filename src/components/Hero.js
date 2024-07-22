import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="main-heading">
        <h1>Product</h1>
        <div className="blockText">
          <h1>Designer</h1>
          <h5>Based in toronto</h5>
        </div>
      </div>
      <div className="sub-headings">
        <h5>Available For Freelance</h5>
        <h5>Work From May 23</h5>
      </div>
      <div className="hero-footer">
        <Link to="/">
          Previously Worked at YML <i className="ri-arrow-right-up-line"></i>
        </Link>
        <Link to="/">
          Figma Ambassador <i className="ri-arrow-right-up-line"></i>
        </Link>
        <div className="hero-footer-nav">
          <div className="circle">
            <i className="ri-arrow-down-line"></i>
          </div>
          <div className="circle">
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
