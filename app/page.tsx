"use client";

import React from "react";
import Contact from "./contact";
import Introduction from "./introduction";
import Work from "./work";
import WorkExperience from "./work-experience";

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <WorkExperience />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
