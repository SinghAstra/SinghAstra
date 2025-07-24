"use client";

import Navbar from "@/components/componentX/navbar";
import React from "react";
import Introduction from "./introduction";
import Journey from "./journey";
import Skills from "./skills";
import Work from "./work";
import WorkExperience from "./work-experience";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Journey />
      <WorkExperience />
      <Skills />
      <Work />
    </div>
  );
};

export default HomePage;
