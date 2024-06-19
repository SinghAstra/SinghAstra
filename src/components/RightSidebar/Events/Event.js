import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Event = ({ date, month, title, location, link }) => (
  <div className="event">
    <div className="event-left">
      <h3>{date}</h3>
      <span>{month}</span>
    </div>
    <div className="event-right">
      <h4>{title}</h4>
      <p>
        <FontAwesomeIcon icon={faLocationDot} className="icon" />
        {location}
      </p>
      <a href={link}>More Info</a>
    </div>
  </div>
);

export default Event;
