import React, { useState } from "react";
import OnlineUser from "./OnlineUser";

const OnlineUsers = () => {
  const [showChat, setShowChat] = useState(true);
  const handleHideChat = () => {
    setShowChat(false);
  };
  if (!showChat) {
    return;
  }
  return (
    <>
      <div className="right-sidebar-title">
        <h4>Conversations</h4>
        <button onClick={handleHideChat}>Hide Chat</button>
      </div>
      <OnlineUser userName="Alison Mana" />
      <OnlineUser userName="Jackson Aston" />
      <OnlineUser userName="Samoan Rose" />
    </>
  );
};

export default OnlineUsers;
