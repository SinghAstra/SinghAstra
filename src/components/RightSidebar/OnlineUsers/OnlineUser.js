import React from "react";
import user1 from "../../../assets/images/user1.png";

const OnlineUser = ({ userName }) => (
  <div className="online-user">
    <div className="online">
      <img src={user1} className="user" alt="user" />
    </div>
    <p>{userName}</p>
  </div>
);

export default OnlineUser;
