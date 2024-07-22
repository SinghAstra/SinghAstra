import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <img src="https://cynthiaugwu.com/images/cynthia.png" alt="" />
      <div className="text-about">
        <h5>(About Me)</h5>
        <p>
          I'm a product designer with a passion for creating products that not
          only look good but also solve real problems. When I'm not sketching
          ideas on paper, you can find me binge-watching a Netflix series or
          playing video games. My design philosophy is simple: make it visually
          appealing, functional, and bring a smile to people's faces. I'm the
          designer you want on your team if you want to make people say 'I need
          that in my life!'.
        </p>
        <Link to="/">Let's talk</Link>
      </div>
    </div>
  );
};

export default About;
