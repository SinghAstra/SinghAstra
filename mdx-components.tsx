import { CodeBlock } from "@/components/mdx/codeblock";
import { ComponentPreviewWithCode } from "@/components/mdx/component-preview-with-code";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type React from "react";

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ComponentPreviewWithCode,
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h1
          id={id}
          data-heading="1"
          className="scroll-m-20 text-5xl font-bold tracking-tighter text-foreground mt-12 mb-6 text-balance"
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h2
          id={id}
          data-heading="2"
          className="scroll-m-20 text-3xl font-bold tracking-tight text-foreground mt-12 mb-6 pb-0 border-0 flex items-center gap-3"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h3
          id={id}
          data-heading="3"
          className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-8 mb-4"
          {...props}
        >
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h4
          id={id}
          data-heading="4"
          className="scroll-m-20 text-lg font-semibold text-foreground mt-6 mb-3"
          {...props}
        >
          {children}
        </h4>
      );
    },
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "leading-10 text-foreground text-base mb-6 text-pretty",
          className
        )}
        {...props}
      />
    ),
    Link: ({ className, href, children, ...props }) => {
      const baseClasses =
        "text-primary hover:text-primary/90 font-medium underline underline-offset-3 transition-all duration-200 hover:scale-[1.02]";
      const combinedClassName = cn(baseClasses, className);

      const isInternal =
        href &&
        (href.startsWith("/") || href.startsWith("#") || !href.includes("://"));

      if (isInternal) {
        return (
          <Link href={href} className={combinedClassName}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    a: ({
      className,
      href,
      children,
      ...props
    }: React.HTMLProps<HTMLAnchorElement>) => {
      const baseClasses =
        "text-primary hover:text-primary/90 font-medium underline underline-offset-3 transition-all duration-200 hover:scale-[1.02]";
      const combinedClassName = cn(baseClasses, className);

      const isInternal =
        href &&
        (href.startsWith("/") || href.startsWith("#") || !href.includes("://"));

      if (isInternal) {
        return (
          <Link href={href} className={combinedClassName}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-6 ml-6 space-y-3 text-foreground list-disc",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-6 ml-6 space-y-3 text-foreground list-decimal",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li
        className={cn(
          "text-foreground text-base leading-7 marker:text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "my-8 border-l-4 border-accent pl-6 pr-4 py-2 text-muted-foreground bg-muted/30 rounded-r-md flex items-center [&>p]:mb-0",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded-md px-2 py-0.5 text-sm font-mono bg-muted/50 text-foreground border border-muted font-medium",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <CodeBlock className={className} {...props} />
    ),
    hr: ({ ...props }) => (
      <hr className="my-10 border-border/50 border-t-2" {...props} />
    ),
    strong: ({ className, ...props }) => (
      <strong
        className={cn("font-bold text-foreground", className)}
        {...props}
      />
    ),
    em: ({ className, ...props }) => (
      <em
        className={cn("italic text-muted-foreground", className)}
        {...props}
      />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto rounded-md border border-border">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead
        className={cn("bg-muted/40 border-b border-border", className)}
        {...props}
      />
    ),
    tbody: ({ className, ...props }) => (
      <tbody
        className={cn("[&>tr:last-child]:border-0", className)}
        {...props}
      />
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "border-b border-border transition-colors hover:bg-muted/20 data-[state=selected]:bg-muted",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "text-left align-middle font-semibold text-foreground px-4 py-3 text-sm",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "align-middle px-4 py-3 text-sm text-foreground",
          className
        )}
        {...props}
      />
    ),
  };
}
