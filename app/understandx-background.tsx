import MovingBackground from "@/components/componentX/moving-background";
import MovingBorder from "@/components/componentX/moving-border";
import RadialFadePulsatingBackground from "@/components/componentX/radial-fade-pulsating-background";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";

const UnderstandXBackground = () => {
  const url = "https://understandx.vercel.app";

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <div className="px-3 py-20 flex flex-col items-center justify-center text-center">
        <RadialFadePulsatingBackground />
        <motion.div variants={scaleInVariant}>
          <a href={url} target="_blank">
            <div
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded bg-transparent hover:bg-transparent group relative text-foreground px-3 py-1 flex gap-2"
              )}
            >
              <MovingBackground />
              <FaTwitterSquare className="size-3" /> Follow For Updates
              <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        </motion.div>

        <motion.h1
          variants={blurInVariant}
          className="text-foreground text-center py-6 text-6xl md:text-7xl lg:text-8xl font-medium "
        >
          Understand <br />
          <span className="text-primary">Repository</span>
        </motion.h1>
        <motion.p
          variants={blurInVariant}
          className="mb-8 text-lg md:text-xl tracking-tight text-muted-foreground "
        >
          Give me public github repository url &
          <br />I will explain the codebase.
        </motion.p>
        <div className="flex items-center justify-center gap-4">
          <a href={url} target="_blank">
            <motion.button
              variants={scaleInVariant}
              className={cn(
                buttonVariants({}),
                "relative border px-3 py-1 rounded flex items-center group cursor-pointer tracking-wide text-base"
              )}
            >
              Visit Website
              <ArrowRightIcon
                className="ml-1 size-4 transition-all duration-300 
                group-hover:translate-x-1"
              />
            </motion.button>
          </a>
          <motion.div variants={scaleInVariant}>
            <a href={url} target="_blank">
              <div className="p-[2px] relative z-[2] overflow-hidden rounded">
                <MovingBorder />
                <Button
                  variant={"outline"}
                  size="lg"
                  className="flex items-center text-md justify-center gap-2 rounded font-normal z-3 relative backdrop-blur-lg"
                >
                  <FaGithub className=" h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UnderstandXBackground;
