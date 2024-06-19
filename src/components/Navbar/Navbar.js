import {
  faAngleRight,
  faBell,
  faCommentDots,
  faDoorOpen,
  faEnvelope,
  faEye,
  faGear,
  faLifeRing,
  faMagnifyingGlass,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/profile-pic.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faBell} className="icons" />
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
          <FontAwesomeIcon icon={faVideo} className="icons" />
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icons" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-profile online">
          <img src={user} alt="user" />
        </div>
        <div className="settings-menu">
          <div className="settings-menu-header">
            <img src={user} alt="user" className="icon" />
            <div>
              <p>John Nicolson</p>
              <a href="/">Your Account</a>
            </div>
          </div>
          <div className="settings-menu-header">
            <FontAwesomeIcon icon={faCommentDots} className="feedback-icon" />
            <div>
              <p>Give Feedback</p>
              <a href="/">Help us to improve the new design.</a>
            </div>
          </div>
          <div className="settings-menu-links">
            <FontAwesomeIcon icon={faGear} className="main-icon" />
            <div>
              <p>Settings & Privacy</p>
              <FontAwesomeIcon icon={faAngleRight} className="icon" />
            </div>
          </div>
          <div className="settings-menu-links">
            <FontAwesomeIcon icon={faLifeRing} className="main-icon" />
            <div>
              <p>Help & Support</p>
              <FontAwesomeIcon icon={faAngleRight} className="icon" />
            </div>
          </div>
          <div className="settings-menu-links">
            <FontAwesomeIcon icon={faEye} className="main-icon" />
            <div>
              <p>Display & Accessibility</p>
              <FontAwesomeIcon icon={faAngleRight} className="icon" />
            </div>
          </div>
          <div className="settings-menu-links">
            <FontAwesomeIcon icon={faDoorOpen} className="main-icon" />
            <div>
              <p>Logout</p>
              <FontAwesomeIcon icon={faAngleRight} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
