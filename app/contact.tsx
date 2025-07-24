import MovingBackground from "@/components/componentX/moving-background";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { scaleInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 " id="contact">
      <div className="px-4 md:px-6 mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center ">
          Get in Touch
        </h2>
        <p className="text-2xl">Do you have something cool to talk about ?</p>
        <motion.div variants={scaleInVariant}>
          <a href={siteConfig.links.twitter} target="_blank">
            <div className="p-1 relative rounded">
              <Button
                variant="outline"
                className="rounded group relative font-normal bg-transparent hover:bg-muted/40 px-3 py-1"
              >
                <MovingBackground shineColor="hsl(var(--primary)/20)" />
                <span className=" text-sm text-foreground flex items-center justify-center gap-2">
                  <FaTwitter className="size-3" /> Feel Free to reach out
                  <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
