import { generatePostDate, sortPostsByDate } from "@/utils/post";
import { PostDisplayType } from "@/models/post";

describe("generatePostDate", () => {
  const startDate = "2020-01-01";

  it("generates correct date for ID 1", () => {
    expect(generatePostDate(1, startDate)).toBe("2020-01-01");
  });

  it("generates correct date for ID 10", () => {
    expect(generatePostDate(10, startDate)).toBe("2020-01-10");
  });

  it("generates correct date for ID 100", () => {
    expect(generatePostDate(100, startDate)).toBe("2020-04-08");
  });

  it("generates correct date for ID 365", () => {
    expect(generatePostDate(365, startDate)).toBe("2020-12-30");
  });

  it("generates correct date for ID 0", () => {
    expect(generatePostDate(0, startDate)).toBe("2019-12-31");
  });

  it("generates correct date for a negative ID", () => {
    expect(generatePostDate(-1, startDate)).toBe("2019-12-30");
  });

  it("generates correct date for a very large ID", () => {
    expect(generatePostDate(10000, startDate)).toBe("2047-05-18");
  });
});

describe("sortPostsByDate", () => {
  it("should sort posts by date in descending order", () => {
    const unsortedPosts: PostDisplayType[] = [
      {
        id: 2,
        userId: 1,
        title: "Post 2",
        body: "Post Body",
        date: "2024-07-01",
      },
      {
        id: 1,
        userId: 1,
        title: "Post 1",
        body: "Post Body",
        date: "2024-07-02",
      },
    ];
    const sortedPosts: PostDisplayType[] = [
      {
        id: 1,
        userId: 1,
        title: "Post 1",
        body: "Post Body",
        date: "2024-07-02",
      },
      {
        id: 2,
        userId: 1,
        title: "Post 2",
        body: "Post Body",
        date: "2024-07-01",
      },
    ];

    const result = sortPostsByDate(unsortedPosts);
    expect(result).toEqual(sortedPosts);
  });
});
