import type { EntryInterface, PostInterface } from "@/models";
import { generateDateFromID } from "@/utils/data-generator";
import Post from "@/app/Post";
import { FAKE_START_DATA } from "@/constants";
import SPALink from "@/app/SPALink";

export async function getPosts() {
  const entries: EntryInterface[] =
    (await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .catch(console.log)) || []; // TODO: Duplicate

  return entries
    .map((entry) => ({
      date: generateDateFromID(entry.id, FAKE_START_DATA),
      ...entry,
    }))
    .sort((a: PostInterface, b: PostInterface) =>
      Date.parse(a.date) < Date.parse(b.date) ? 1 : -1,
    ); // Handle cache strategy
}

export default async function Home() {
  const posts = await getPosts();
  const postsCount = posts.length;

  return (
    <div className="relative top-[10px] flex flex-col gap-8">
      {posts.map((post, index) => (
        <SPALink
          key={post.id}
          href={"/" + post.id + "/"}
          className="block py-4 hover:scale-[1.005]"
        >
          <Post {...post} staleness={index / postsCount} />
        </SPALink>
      ))}
    </div>
  );
}
