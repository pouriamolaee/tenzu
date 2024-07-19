import type { PostDisplayType } from "@/models/post";

const FAKE_START_DATA = "2023-03-10";

/**
 * Generates a date string in YYYY-MM-DD format based on an ID and a start date.
 *
 * @param {number} id - The ID used to generate the date. Each ID represents a number of days from the start date.
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @returns {string} - The generated date in YYYY-MM-DD format.
 */
export function generatePostDate(
  id: number,
  startDate: string = FAKE_START_DATA,
): string {
  const baseDate = new Date(startDate);
  const date = new Date(baseDate);
  date.setDate(baseDate.getDate() + (id - 1));
  const [dataPortion] = date.toISOString().split("T");
  return dataPortion;
}

/**
 * Sorts an array of posts by their date in descending order.
 *
 * @param {PostDisplayType[]} posts - An array of posts to be sorted.
 * @returns {PostDisplayType[]} The sorted array of posts.
 */
export function sortPostsByDate(posts: PostDisplayType[]): PostDisplayType[] {
  return posts.sort((a, b) =>
    Date.parse(a.date) < Date.parse(b.date) ? 1 : -1,
  );
}
