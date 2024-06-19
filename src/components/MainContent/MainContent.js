import React from "react";
import "./MainContent.css";
import Post from "./Post";
import Story from "./Story";
import WritePost from "./WritePost";

const MainContent = () => {
  return (
    <div className="main-content">
      <Story />
      <WritePost />
      <Post number={1} />
      <Post number={2} />
      <Post number={3} />
      <Post number={4} />
      <Post number={5} />
    </div>
  );
};

export default MainContent;
