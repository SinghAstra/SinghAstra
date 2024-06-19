import {
  faCaretDown,
  faComment,
  faEllipsis,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import feedimage1 from "../../assets/images/feed-image-1.png";
import feedimage2 from "../../assets/images/feed-image-2.png";
import feedimage3 from "../../assets/images/feed-image-3.png";
import feedimage4 from "../../assets/images/feed-image-4.png";
import feedimage5 from "../../assets/images/feed-image-5.png";
import user from "../../assets/images/profile-pic.png";

const images = [feedimage1, feedimage2, feedimage3, feedimage4, feedimage5];

const Post = ({ number }) => {
  return (
    <div className="post-container">
      <div className="post-row">
        <div className="user-profile">
          <img src={user} alt="user" className="icon" />
          <div>
            <p>John Nicolson</p>
            <span>June 22, 2024 13:40 PM</span>
          </div>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className="icon" />
      </div>
      <p className="post-text">
        Planning to grab some coffee ☕ with <span>@John</span> later and maybe
        catch up on some reading 📚. The weather is perfect for a little outdoor
        relaxation 🌳🌸.<a href="/">#coffee</a>
        <a href="/">#relax</a>
      </p>
      <img src={images[number - 1]} className="post-image" alt="post" />
      <div className="post-row">
        <div className="activity-icons">
          <a href="/">
            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            90
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faComment} className="icon" />
            40
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faShare} className="icon" />
            50
          </a>
        </div>
        <div className="user-activity">
          <img src={user} alt="user" className="icon" />
          <FontAwesomeIcon icon={faCaretDown} className="icon arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default Post;
