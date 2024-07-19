import type { PostType } from "@/models/post";
import { config } from "@/constants/config";

export async function getPosts(): Promise<PostType[]> {
  const res = await fetch(`${config.baseUrl}/posts`);
  return res.json();
}

export async function getPost(id: string): Promise<PostType> {
  const res = await fetch(`${config.baseUrl}/posts/${id}`);
  return res.json();
}
