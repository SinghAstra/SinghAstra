"use client";

import Navbar from "@/components/componentX/navbar";
import React from "react";
import Introduction from "./introduction";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
        id="about"
      >
        <div className="px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12">
            My Journey in <span className="text-primary">Engineering</span> &{" "}
            <span className="text-primary">Development</span>
          </h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Curiosity as a Driving Force
              </h3>
              <p>
                I am driven by a strong sense of curiosity and a desire to
                create things that have a meaningful impact. For me, engineering
                is the ideal path to pursue this passion, as it empowers me to
                turn ideas into reality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Versatility in Programming
              </h3>
              <p>
                I chose programming as my starting point because of its
                versatility—it transcends traditional branches and opens doors
                across diverse fields.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Exploring Multiple Technologies
              </h3>
              <p>
                Early on, I undertook several development paths in parallel:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Cross-platform app development: Working with Flutter</li>
                <li>
                  Native app development: Using Android Studio with Kotlin
                </li>
                <li>Web development: Leveraging the MERN stack and Next.js</li>
                <li>Machine learning: Exploring data-driven solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Focusing on Web Development
              </h3>
              <p>
                Through this journey, I recognized that mastering web
                development provides a strong foundation applicable to many
                other areas of tech. As a result, I am currently specializing as
                a web developer, confident that these skills will help me branch
                out into other areas of development and engineering in the
                future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen flex items-center justify-center">
        HomePage - 2
      </div>
    </div>
  );
};

export default HomePage;
