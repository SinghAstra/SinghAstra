import {
  faCode,
  faGlobe,
  faNewspaper,
  faPencil,
  faShoppingCart,
  faUserFriends,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar-top">
        <a href="/news">
          <FontAwesomeIcon icon={faNewspaper} className="icon" />
          News
        </a>
        <a href="/friends">
          <FontAwesomeIcon icon={faUserFriends} className="icon" />
          Friends
        </a>
        <a href="/groups">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          Groups
        </a>
        <a href="/marketplace">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          Marketplace
        </a>
        <a href="/watch">
          <FontAwesomeIcon icon={faVideo} className="icon" />
          Watch
        </a>
        <a href="/see-more">See More</a>
      </div>
      <div className="shortcuts">
        <p>Your Shortcuts</p>
        <a href="/web-developer">
          <FontAwesomeIcon icon={faCode} className="icon" /> Web Developer
        </a>
        <a href="/design">
          <FontAwesomeIcon icon={faPencil} className="icon" />
          Design
        </a>
        <a href="/website-experts">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          Website Experts
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
