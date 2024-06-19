import React from "react";
import Advertisement from "./Advertisement";
import Events from "./Events/Events";
import OnlineUsers from "./OnlineUsers/OnlineUsers";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <Events />
      <Advertisement />
      <OnlineUsers />
    </div>
  );
};

export default RightSidebar;
