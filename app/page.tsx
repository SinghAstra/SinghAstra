import Navbar from "@/components/componentX/navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col gap-2 items-center justify-center  px-2 sm:px-4">
        <div className="max-w-3xl w-full flex flex-col gap-2">
          <h1 className="text-6xl font-bold">
            Hi, I&apos;m
            <br /> <span className="text-primary">Abhay Pratap Singh</span>
          </h1>
          <p className="text-3xl">
            Pursuing curiosity through engineering. I build cool things in order
            to understand things & build cooler things
          </p>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        HomePage - 2
      </div>
    </div>
  );
};

export default HomePage;
