import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="main-heading">
        <div className="bounding">
          <h1 className="bounding-elem">Product</h1>
        </div>
        <div className="blockText">
          <div className="bounding">
            <h1 className="bounding-elem">Designer</h1>
          </div>
          <div className="bounding">
            <h5 className="bounding-elem">Based in toronto</h5>
          </div>
        </div>
      </div>
      <div className="sub-headings">
        <div className="bounding">
          <h5 className="bounding-elem">Available For Freelance</h5>
          <h5 className="bounding-elem">Work From May 23</h5>
        </div>
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
