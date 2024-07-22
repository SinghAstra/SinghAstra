import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h5>2023 &copy;</h5>
        <h5>0:05 AM EST</h5>
      </div>
      <div className="footer-right">
        <Link to="/">dribble</Link>
        <Link to="/">instagram</Link>
        <Link to="/">linkedin</Link>
        <Link to="/">twitter</Link>
      </div>
    </div>
  );
};

export default Footer;
