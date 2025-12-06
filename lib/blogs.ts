import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category?: string;
}

const BLOGS_PATH = path.join(process.cwd(), "app", "blogs");

export function getAllBlogsMeta(): BlogMeta[] {
  // 1. Get all Tech Categories (e.g., "javascript", "react")
  const categories = fs
    .readdirSync(BLOGS_PATH)
    .filter((file) => fs.statSync(path.join(BLOGS_PATH, file)).isDirectory());

  // 2. Loop through categories, then loop through blog slugs inside them
  const blogs = categories.flatMap((category) => {
    const categoryPath = path.join(BLOGS_PATH, category);

    // Get blog folders inside the specific category
    const blogDirs = fs
      .readdirSync(categoryPath)
      .filter((file) =>
        fs.statSync(path.join(categoryPath, file)).isDirectory()
      );

    // Map blog folders to BlogMeta
    return blogDirs.map((postSlug) => {
      // Structure: app/blogs/[category]/[slug]/page.mdx
      const filePath = path.join(categoryPath, postSlug, "page.mdx");

      // Safety check: ensure page.mdx exists before reading
      if (!fs.existsSync(filePath)) {
        return null;
      }

      const source = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(source);

      const fullSlug = `${category}/${postSlug}`;

      return {
        ...(data as Omit<BlogMeta, "slug">),
        slug: fullSlug,
        category,
      };
    });
  });

  // 3. Filter out nulls (files not found) and sort by date
  return blogs
    .filter((blog) => blog !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
