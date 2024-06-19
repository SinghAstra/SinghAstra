import React from "react";
import Event from "./Event";

const Events = () => {
  return (
    <>
      <div className="right-sidebar-title">
        <h4>Events</h4>
        <a href={"/see-all"}>See All</a>
      </div>
      <Event
        date="18"
        month="March"
        title="Social Media"
        location="Wilson Tech Park"
        link="/more-info"
      />
      <Event
        date="22"
        month="June"
        title="Mobile Marketing"
        location="Wilson Tech Park"
        link="/more-info"
      />
    </>
  );
};

export default Events;
