import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Advertisement from "../../assets/images/advertisement.jpg";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
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
      <div className="right-sidebar-title">
        <h4>Conversation</h4>
        <a href="/close">Hide Chat</a>
      </div>
      <div className="online-user">
        <div className="online">
          <img src={user1} className="user" alt="user" />
        </div>
        <p>Alison Mina</p>
      </div>
      <div className="online-user">
        <div className="online">
          <img src={user2} className="user" alt="user" />
        </div>
        <p>Jackson Aston</p>
      </div>
      <div className="online-user">
        <div className="online">
          <img src={user3} className="user" alt="user" />
        </div>
        <p>Samona Rose</p>
      </div>
    </div>
  );
};

export default RightSidebar;
