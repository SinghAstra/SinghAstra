import {
  faCamera,
  faCaretDown,
  faSmile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import user from "../../assets/images/profile-pic.png";

const WritePost = () => {
  return (
    <div className="write-post-container">
      <div className="user-profile">
        <img src={user} alt="user" className="icon" />
        <div>
          <p>John Nicolson</p>
          <small>
            Public <FontAwesomeIcon icon={faCaretDown} className="icon" />
          </small>
        </div>
      </div>
      <div className="post-input-container">
        <textarea rows={3} placeholder="What's on your mind, John ?" />
        <div className="add-post-links">
          <a href="/live">
            <FontAwesomeIcon icon={faVideo} className="icon icon1" />
            Live Video
          </a>
          <a href="/photo">
            <FontAwesomeIcon icon={faCamera} className="icon icon2" />
            Photo/Video
          </a>
          <a href="/feeling">
            <FontAwesomeIcon icon={faSmile} className="icon icon3" />
            Feeling/Activity
          </a>
        </div>
      </div>
    </div>
  );
};

export default WritePost;
