import React, { useState } from "react";
import hudu from "../assets/hudu.png";
import ixperience from "../assets/ixperience.png";
import plug from "../assets/plug.png";
import "../styles/Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <img src={plug} alt="The Plug" />
        <h1>The Plug</h1>
        <h5>2022</h5>
      </div>
      <div className="feature">
        <img src={ixperience} alt="ixperience" />
        <h1>ixperience</h1>
        <h5>2022</h5>
      </div>
      <div className="feature last-feature">
        <img src={hudu} alt="hudu" />
        <h1>hudu</h1>
        <h5>2022</h5>
      </div>
    </div>
  );
};

export default Features;
