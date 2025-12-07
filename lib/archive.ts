import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface ArchiveMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const ARCHIVE_PATH = path.join(process.cwd(), "app", "archive");

export function getAllArchivesMeta(): ArchiveMeta[] {
  // 1. Get all Tech Categories (e.g., "javascript", "react")
  const categories = fs
    .readdirSync(ARCHIVE_PATH)
    .filter((file) => fs.statSync(path.join(ARCHIVE_PATH, file)).isDirectory());

  // 2. Loop through categories, then loop through blog slugs inside them
  const archive = categories.flatMap((category) => {
    const categoryPath = path.join(ARCHIVE_PATH, category);

    // Get blog folders inside the specific category
    const blogDirs = fs
      .readdirSync(categoryPath)
      .filter((file) =>
        fs.statSync(path.join(categoryPath, file)).isDirectory()
      );

    // Map blog folders to BlogMeta
    return blogDirs.map((postSlug) => {
      // Structure: app/archive/[category]/[slug]/page.mdx
      const filePath = path.join(categoryPath, postSlug, "page.mdx");

      // Safety check: ensure page.mdx exists before reading
      if (!fs.existsSync(filePath)) {
        return null;
      }

      const source = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(source);

      const fullSlug = `${category}/${postSlug}`;

      return {
        ...(data as Omit<ArchiveMeta, "slug">),
        slug: fullSlug,
        category,
      };
    });
  });

  // 3. Filter out nulls (files not found) and sort by date
  return archive
    .filter((archive) => archive !== null)
    .sort((a, b) => {
      const parseDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split("-");
        return new Date(`${year}-${month}-${day}`).getTime();
      };

      return parseDate(b.date) - parseDate(a.date);
    });
}
