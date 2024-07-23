import React, { useEffect, useState } from "react";
import "../styles/MouseFollower.css";

const MouseFollower = ({ xScale = 1, yScale = 1 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px) scale(${xScale}, ${yScale})`,
  };

  return <div className="mouse-follower" style={style}></div>;
};

export default MouseFollower;
