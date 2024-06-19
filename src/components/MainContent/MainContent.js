import React from "react";
import "./MainContent.css";
import Story from "./Story";
import WritePost from "./WritePost";

const MainContent = () => {
  return (
    <div className="main-content">
      <Story />
      <WritePost />
    </div>
  );
};

export default MainContent;
