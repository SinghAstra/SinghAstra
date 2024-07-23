import React, { useEffect } from "react";
import "../styles/MouseFollower.css";

const MouseFollower = () => {
  useEffect(() => {
    const cursor = document.querySelector(".blob");

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div className="blob"></div>;
};

export default MouseFollower;
