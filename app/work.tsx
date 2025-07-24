import React from "react";
import ChatSDKXBackground from "./chatsdkx-background";
import ComponentXBackground from "./componentx-background";
import SummaryXBackground from "./summaryx-background";
import UnderstandXBackground from "./understandx-background";

const Work = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 " id="work">
      <div className="px-4 md:px-6 mx-auto flex flex-col gap-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12">
          Check out my work
        </h2>
        <div className="h-[600px] border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] overflow-hidden">
          <ComponentXBackground />
        </div>
        <div className="h-[600px] border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] overflow-hidden">
          <UnderstandXBackground />
        </div>
        <div className="h-[600px] border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] overflow-hidden">
          <SummaryXBackground />
        </div>
        <div className="h-[600px] border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] overflow-hidden">
          <ChatSDKXBackground />
        </div>
      </div>
    </div>
  );
};

export default Work;
