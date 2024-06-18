import {
  faBell,
  faEnvelope,
  faMagnifyingGlass,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
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
          <img src={user} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
