"use client";

import { ArchiveMeta } from "@/lib/archive";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ClientHomePageProps {
  recentArchive: ArchiveMeta[];
}

export default function ClientHomePage({ recentArchive }: ClientHomePageProps) {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Mongo DB",
    "Postgres",
    "Redis",
    "Bull MQ",
    "Express JS",
    "Tailwind CSS",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block border p-1 rounded">
        <div className="flex flex-col gap-1">
          {["intro", "work", "thoughts", "connect"].map(
            (section, index, array) => (
              <button
                key={section}
                onClick={() =>
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-2 h-8 cursor-pointer transition-all duration-500 ${
                  index === 0
                    ? "rounded-t-xs rounded-b-none"
                    : index === array.length - 1
                    ? "rounded-b-xs rounded-t-none"
                    : "rounded-none"
                } ${
                  activeSection === section
                    ? "bg-foreground"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Maps to ${section}`}
              />
            )
          )}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 sm:px-8 lg:px-16">
        <section
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / 2025
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Abhay
                  <br />
                  <span className="text-muted-foreground">Pratap Singh</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Pursuing Curiosity through engineering.
                  <span className="text-foreground">
                    {" "}
                    Full Stack Developer{" "}
                  </span>
                  for now.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">Full Stack Developer</div>
                  <div className="text-muted-foreground">@WebbyWolf</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  Skills
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border rounded-full hover:border-muted-foreground/50 transition-all duration-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">
                Work Experience
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                2023 — 2025
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  role: "Full Stack Developer",
                  company: "Prudeta AI",
                  description:
                    "Engineered a legal research platform featuring a RAG-powered chat interface and automated ETL pipelines to centralize data for Indian lawyers.",
                  tech: ["TypeScript", "Next.js", "Express JS"],
                },
                {
                  role: "Full Stack Developer",
                  company: "Viral Chapters",
                  description:
                    "Architected a YouTube growth tool using Redis & BullMQ to automatically generate viral chapters, titles, and descriptions for increased viewer engagement",
                  tech: [
                    "TypeScript",
                    "Next.js",
                    "Express JS",
                    "Redis",
                    "BullMQ",
                  ],
                },
                {
                  role: "Full Stack Developer",
                  company: "Webby Wolf",
                  description:
                    "Developed 'BlogSuite', an SEO automation platform that identifies trending social media niches and schedules optimized content to boost organic rankings.",
                  tech: ["TypeScript", "Next.js"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-8 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {job.role}
                      </h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {job.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-1 lg:justify-end lg:items-start content-start mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Recent Thoughts</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {recentArchive.map((post, index) => (
                <Link
                  href={`/archive/${post.slug}`}
                  key={index}
                  passHref
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <article>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span>Read more</span>
                        <ArrowRight className="group-hover:ml-1 h-5 w-5 transition-all duration-300" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/archive"
                className="inline-flex items-center px-4 py-2 border border-border rounded hover:bg-muted/30 transition-all duration-300"
              >
                View All Archive
              </Link>
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">
                Let&apos;s Connect
              </h2>

              <div className="space-y-6">
                <p className="text-md text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:contact.singhastra@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base">
                      contact.singhastra@gmail.com
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@SinghAstra",
                    url: "https://github.com/SinghAstra",
                  },
                  {
                    name: "X",
                    handle: "@XSinghAstra",
                    url: "https://x.com/XSinghAstra",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="group p-4 border rounded hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-all duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 SinghAstra. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
