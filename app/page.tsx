import { getAllBlogsMeta } from "@/lib/blogs";
import ClientHomePage from "./client";

const MAX_RECENT_POSTS = 4;

export default async function HomePage() {
  const allPosts = getAllBlogsMeta();

  const recentPosts = allPosts.slice(0, MAX_RECENT_POSTS);

  return <ClientHomePage recentBlogs={recentPosts} />;
}
