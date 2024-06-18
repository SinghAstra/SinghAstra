import React, { useState } from "react";
import Advertisement from "./Advertisement";
import Event from "./Event";
import OnlineUser from "./OnlineUser";
import "./RightSidebar.css";
import SectionTitle from "./SectionTitle";

const RightSidebar = () => {
  const [showAdvertisement, setShowAdvertisement] = useState(true);
  const [showChat, setShowChat] = useState(true);

  const handleCloseAdvertisement = () => {
    setShowAdvertisement(false);
  };

  const handleHideChat = () => {
    setShowChat(false);
  };

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
      {showAdvertisement && (
        <>
          <SectionTitle
            title="Advertisement"
            linkText="Close"
            linkHref="#!"
            onClose={handleCloseAdvertisement}
          />
          <Advertisement />
        </>
      )}
      {showChat && (
        <>
          <SectionTitle
            title="Conversation"
            linkText="Hide Chat"
            linkHref="#!"
            onClose={handleHideChat}
          />
          <OnlineUser userName="Alison Mana" />
          <OnlineUser userName="Jackson Aston" />
          <OnlineUser userName="Samoan Rose" />
        </>
      )}
    </div>
  );
};

export default RightSidebar;
