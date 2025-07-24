"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useState } from "react";

function WorkExperience() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentVariants = {
    collapsed: { opacity: 0, height: 0, overflow: "hidden" },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.3 },
        height: { duration: 0.4 },
      },
    },
  };

  const iconVariants = {
    rotated: { rotate: 180 },
    normal: { rotate: 0 },
  };

  return (
    <div className="w-full">
      <div className="p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          Work Experience
        </h2>
        <button
          className="flex items-center justify-between w-full text-left focus:outline-none"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 ring-2 ring-primary">
              <AvatarImage
                src="/assets/webbywolf.jpeg"
                alt="Atomic Finance Logo"
              />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Webby Wolf</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down text-muted-foreground"
                  variants={iconVariants}
                  animate={isOpen ? "rotated" : "normal"}
                  transition={{ duration: 0.3 }}
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </div>
              <p className="text-sm text-muted-foreground">
                Full Stack Engineer
              </p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            June 2025 – Present
          </span>
        </button>

        {isOpen && (
          <motion.div
            id="accordion-content-bloguite"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className="mt-4 pr-4"
          >
            <p className="text-base text-card-foreground">
              I am serving as the project lead for Bloguite, a web application
              designed to generate AI-powered blogs. The platform helps
              corporations attract a wider audience within their niche, retain
              that audience through engaging, personalized content, and
              ultimately drive higher sales through targeted messaging.
              Additionally, the blogs are SEO-friendly, which helps improve the
              company&apos;s visibility and ranking on Google, further
              amplifying their digital reach.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
