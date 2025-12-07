"use client";

import { MenuToggle } from "@/components/component-x/menu-toggle";
import ArchiveSidebar from "@/components/layout/archive-sidebar";
import { ArchivePagination } from "@/components/mdx/archive-pagination";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { useState } from "react";

const ArchiveLayoutHeader = ({
  isOpen,
  setIsSheetOpen,
}: {
  isOpen: boolean;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between p-2 w-full">
      <Link href="/" className="text-xl logo text-primary">
        {siteConfig.name}
      </Link>

      <div className="flex gap-2 items-center">
        <div className="hidden md:block">
          <a href={siteConfig.links.github} target="_blank">
            <Button
              variant={"outline"}
              className="bg-transparent hover:bg-muted/20 transition-all duration-300 font-normal"
            >
              Github
            </Button>
          </a>
        </div>
        <div className="block md:hidden">
          <MenuToggle onOpenChange={setIsSheetOpen} externalOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col overflow-hidden w-full">
      <ArchiveLayoutHeader
        setIsSheetOpen={setIsSheetOpen}
        isOpen={isSheetOpen}
      />
      <div className="flex flex-1 overflow-hidden relative">
        <ArchiveSidebar />
        <div className="flex-1 flex overflow-hidden pb-2 pr-2 pl-2 lg:pl-0">
          <div className="flex-1 h-full flex overflow-hidden border rounded bg-muted/30">
            <div className="h-full p-1 sm:p-4 sm:px-8 flex-1 overflow-y-auto">
              {children}
              <ArchivePagination />
            </div>
          </div>
        </div>
      </div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side="right"
          className="h-dvh flex flex-col gap-0 overflow-hidden w-full p-0"
        >
          <ArchiveLayoutHeader
            setIsSheetOpen={setIsSheetOpen}
            isOpen={isSheetOpen}
          />
          <ArchiveSidebar
            className="block w-full bg-transparent p-2"
            onLinkClick={() => setIsSheetOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BlogsLayout;
