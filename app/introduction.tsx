import MovingBackground from "@/components/componentX/moving-background";
import MovingBorder from "@/components/componentX/moving-border";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { scaleInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon, Download } from "lucide-react";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Introduction = () => {
  return (
    <div
      className="min-h-screen flex flex-col gap-8 items-center justify-center  px-2 sm:px-4"
      id="intro"
    >
      <motion.div variants={scaleInVariant}>
        <a href={siteConfig.links.twitter} target="_blank">
          <div className="p-1 relative rounded">
            <Button
              variant="outline"
              className="rounded group relative font-normal bg-transparent hover:bg-muted/40 px-3 py-1"
            >
              <MovingBackground shineColor="hsl(var(--primary)/20)" />
              <span className=" text-sm text-foreground flex items-center justify-center gap-2">
                <FaTwitter className="size-3" /> Follow For Updates
                <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </a>
      </motion.div>
      <div className="max-w-3xl w-full flex flex-col gap-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold ">
          Hi, I&apos;m
          <br /> <span className="text-primary">Abhay Pratap Singh</span>
        </h1>
        <p className="text-3xl">
          Pursuing curiosity through engineering. I build cool things in order
          to understand things & build cooler things
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:mt-4 items-center">
        <a href={siteConfig.links.cv} target="_blank">
          <motion.div variants={scaleInVariant} className="p-1">
            <Button
              size="lg"
              className="group rounded relative flex items-center gap-1 text-md font-normal backdrop-blur-md  "
            >
              <Download className="mr-2 h-4 w-4 " />
              Download CV
            </Button>
          </motion.div>
        </a>
        <motion.div variants={scaleInVariant} className="p-1 relative rounded">
          <a href={siteConfig.links.github} target="_blank">
            <div className="p-[2px] relative z-[2] overflow-hidden rounded">
              <MovingBorder />
              <Button
                variant={"outline"}
                size="lg"
                className="flex items-center text-md justify-center gap-2 rounded font-normal z-3 relative transition-all duration-200 hover:bg-background"
              >
                <FaGithub className=" h-4 w-4" />
                GitHub
              </Button>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
