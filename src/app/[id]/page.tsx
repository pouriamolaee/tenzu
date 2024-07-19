import { generatePostDate } from "@/utils/post";
import { sans } from "@/app/fonts";
import { cn } from "@/utils/cn";
import type { PostType } from "@/models/post";
import { getPost, getPosts } from "@/services/post";

async function getDisplayPost(id: string) {
  try {
    const post: PostType = await getPost(id);

    return {
      date: generatePostDate(post.id),
      ...post,
    };
  } catch (error) {
    console.log("Unable to fetch, error:", error);
    return null;
  }
}

type PageProps = { params: { id: string } };

export default async function PostPage({ params }: PageProps) {
  const post = await getDisplayPost(params.id);

  if (!post) {
    return "Unable to fetch post :(";
  }

  const { title, date, body } = post;

  return (
    <article>
      <h1
        data-cy="post-title"
        className={cn(
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        )}
      >
        {title}
      </h1>
      <p
        data-cy="post-date"
        className="mt-2 text-[13px] text-gray-700 dark:text-gray-300"
      >
        {new Date(date).toLocaleDateString("en", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div data-cy="post-body" className="mt-10">
        {body}
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const { title, body } = await getPost(params.id);

    return {
      title: title + " — overreacted",
      description: body,
    };
  } catch (error) {
    return {
      title: "Post Not found",
    };
  }
}

export async function generateStaticParams() {
  const posts: PostType[] = await getPosts();

  return posts.map(({ id }) => ({
    id: id.toString(),
  }));
}
