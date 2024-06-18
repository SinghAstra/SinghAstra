import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Advertisement from "../../assets/advertisement.jpg";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-title">
        <h4>Events</h4>
        <a href="/see-all">See All</a>
      </div>
      <div className="event">
        <div className="event-left">
          <h3>18</h3>
          <span>March</span>
        </div>
        <div className="event-right">
          <h4>Social Media</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Willson Tech Park
          </p>
          <a href="/more-info">More Info</a>
        </div>
      </div>
      <div className="event">
        <div className="event-left">
          <h3>22</h3>
          <span>June</span>
        </div>
        <div className="event-right">
          <h4>Mobile Marketing</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Willson Tech Park
          </p>
          <a href="/more-info">More Info</a>
        </div>
      </div>
      <div className="right-sidebar-title">
        <h4>Advertisement</h4>
        <a href="/close">Close</a>
      </div>
      <img src={Advertisement} className="advertisement" alt="ads" />
    </div>
  );
};

export default RightSidebar;
