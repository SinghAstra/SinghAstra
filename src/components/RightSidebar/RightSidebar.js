import React from "react";
import Advertisement from "./Advertisement";
import Event from "./Event";
import OnlineUser from "./OnlineUser";
import "./RightSidebar.css";
import SectionTitle from "./SectionTitle";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <SectionTitle title="Events" linkText="See All" linkHref="/see-all" />
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
      <SectionTitle title="Advertisement" linkText="Close" linkHref="/close" />
      <Advertisement />
      <SectionTitle
        title="Conversation"
        linkText="Hide Chat"
        linkHref="/close"
      />
      <OnlineUser userName="Alison Mina" />
      <OnlineUser userName="Jackson Aston" />
      <OnlineUser userName="Samona Rose" />
    </div>
  );
};

export default RightSidebar;
