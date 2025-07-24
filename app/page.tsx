"use client";

import React from "react";
import Contact from "./contact";
import Introduction from "./introduction";
import Skills from "./skills";
import Work from "./work";
import WorkExperience from "./work-experience";

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <WorkExperience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default HomePage;
