import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";

const Story = () => {
  return (
    <div className="story-gallery">
      <div className="story story1">
        <FontAwesomeIcon icon={faAdd} className="icon" />
        <p>Add Story</p>
      </div>
      <div className="story story2">
        <img src={user2} alt="icon" className="icon" />
        <p>Alison</p>
      </div>
      <div className="story story3">
        <img src={user3} alt="icon" className="icon" />
        <p>Jackson</p>
      </div>
      <div className="story story4">
        <img src={user4} alt="icon" className="icon" />
        <p>Samoan</p>
      </div>
      <div className="story story5">
        <img src={user5} alt="icon" className="icon" />
        <p>John Doe</p>
      </div>
    </div>
  );
};

export default Story;
