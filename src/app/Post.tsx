import type { PostInterface } from "@/models";
import { sans } from "@/app/fonts";
import Color from "colorjs.io";
import { type CSSProperties } from "react";

type PostProps = PostInterface & { staleness: number };

export default function Post({ title, date, body, staleness }: PostProps) {
  return (
    <article>
      <PostTitle title={title} staleness={staleness} />
      <PostMeta date={date} />
      <PostSpoiler body={body} />
    </article>
  );
}

type PostTitleProps = { title: string; staleness: number };

// Where to put these constants?
const lightStart = new Color("lab(63 59.32 -1.47)");
const lightEnd = new Color("lab(33 42.09 -43.19)");
const lightRange = lightStart.range(lightEnd);
const darkStart = new Color("lab(81 32.36 -7.02)");
const darkEnd = new Color("lab(78 19.97 -36.75)");
const darkRange = darkStart.range(darkEnd);

function PostTitle({ title, staleness }: PostTitleProps) {
  return (
    <h2
      className={[
        sans.className,
        "text-[28px] font-black",
        "text-[--lightLink] dark:text-[--darkLink] capitalize",
      ].join(" ")}
      style={
        {
          "--lightLink": lightRange(staleness).toString(),
          "--darkLink": darkRange(staleness).toString(),
        } as CSSProperties
      }
    >
      {title}
    </h2>
  );
}

type PostMetaProps = { date: string };

function PostMeta({ date }: PostMetaProps) {
  return (
    <p className="text-[13px] text-gray-700 dark:text-gray-300">
      {new Date(date).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </p>
  );
}

type PostSpoilerProps = { body: string };

function PostSpoiler({ body }: PostSpoilerProps) {
  return <p className="mt-1">{body}</p>; // Truncate the body
}
