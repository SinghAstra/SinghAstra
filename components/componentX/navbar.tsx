"use client";

import { Button } from "@/components/ui/button";
import { Briefcase, Contact, Home, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const navItems = [
  { icon: Home, label: "Intro", href: "/" },
  { icon: Briefcase, label: "Projects", href: "/#projects" },
  { icon: Contact, label: "Contact", href: "/#contact" },
  { icon: Info, label: "Journey", href: "/journey" },
];

function NavbarContent() {
  const pathname = usePathname();
  console.log("pathname is ", pathname);
  return (
    <div className="flex items-center gap-1 bg-muted/20 backdrop-blur-lg border rounded px-2 py-1 shadow-lg">
      {navItems.map((item, index) => (
        <Fragment key={item.label}>
          <Button
            key={item.label}
            variant="ghost"
            className={`hover:bg-primary transition-all duration-200 rounded font-normal
               ${
                 pathname === item.href
                   ? "bg-primary text-primary-foreground"
                   : "text-muted-foreground"
               }
            `}
            asChild
          >
            <a href={item.href}>
              <item.icon className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline"> {item.label}</span>
            </a>
          </Button>
          {/* Add divider except after the last button */}
          {index !== navItems.length - 1 && (
            <span className="h-5 w-px bg-muted/50 " aria-hidden="true"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    // Handler for scroll event
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  return (
    <nav
      className={`left-1/2 transform -translate-x-1/2 z-50 shadow-2xl top-2  ${
        scrolled ? "fixed" : "hidden"
      }`}
    >
      <NavbarContent />
    </nav>
  );
}

export default Navbar;
