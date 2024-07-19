import type { PostDisplayType, PostType } from "@/models/post";
import { generatePostDate, sortPostsByDate } from "@/utils/post";
import Post from "@/app/post";
import InternalLink from "@/app/internal-link";
import { getPosts } from "@/services/post";

async function getDisplayPosts() {
  try {
    const posts: PostType[] = await getPosts();
    const displayPosts: PostDisplayType[] = posts.map((post) => ({
      date: generatePostDate(post.id),
      ...post,
    }));

    return sortPostsByDate(displayPosts);
  } catch (error) {
    console.log("Unable to fetch, error:", error);
    return null;
  }
}

export default async function Home() {
  const posts = await getDisplayPosts();

  if (!posts) {
    return "Unable to fetch posts :(";
  }

  return (
    <div
      data-cy="post-list"
      className="relative top-[10px] flex flex-col gap-8"
    >
      {posts.map((post, index) => (
        <InternalLink
          data-cy="post-item"
          key={post.id}
          href={"/" + post.id + "/"}
          className="block py-4 hover:scale-[1.005]"
        >
          <Post {...post} staleness={index / posts.length} />
        </InternalLink>
      ))}
    </div>
  );
}
