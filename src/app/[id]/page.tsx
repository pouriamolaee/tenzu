import type { EntryInterface, PostInterface } from "@/models";
import { generateDateFromID } from "@/utils/data-generator";
import { FAKE_START_DATA } from "@/constants";
import { sans } from "@/app/fonts";
import { cn } from "@/utils/cn";

async function getPost(id: string) {
  try {
    const entry: EntryInterface = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`, // Add these to env
    ).then((res) => res.json()); // Remove this then

    return {
      date: generateDateFromID(entry.id, FAKE_START_DATA),
      ...entry,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Return null in case of error
  }
}

type PageProps = { params: { id: string } };

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  const { title, date, body } = post;

  return (
    <article>
      <h1
        className={cn(
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        )}
      >
        {title}
      </h1>
      <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        {new Date(date).toLocaleDateString("en", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div className="mt-10">{body}</div>
    </article>
  );
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const { title, body } = (await getPost(params.id)) as PostInterface;

    return {
      title: title + " — overreacted",
      description: body,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not found",
      description: "",
    };
  }
}

export async function generateStaticParams() {
  const entries: EntryInterface[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  )
    .then((res) => res.json())
    .catch(console.log); // TODO: Duplicate

  return entries.map(({ id }) => ({
    id: id.toString(),
  }));
}
