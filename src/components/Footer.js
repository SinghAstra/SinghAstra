import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(date.toLocaleTimeString([], options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer">
      <div className="footer-left">
        <h5>{new Date().getFullYear()} &copy;</h5>
        <h5>{currentTime}</h5>
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
