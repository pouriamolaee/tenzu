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
