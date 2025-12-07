import { getAllArchivesMeta } from "@/lib/archive";
import ClientHomePage from "./client";

const MAX_RECENT_POSTS = 4;

export default async function HomePage() {
  const allArchives = getAllArchivesMeta();

  const recentPosts = allArchives.slice(0, MAX_RECENT_POSTS);

  return <ClientHomePage recentArchive={recentPosts} />;
}
