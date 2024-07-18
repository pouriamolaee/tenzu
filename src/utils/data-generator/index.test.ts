import { generateDateFromID } from "@/utils/data-generator/index";

describe("generateDateFromID", () => {
  const startDate = "2020-01-01";

  it("generates correct date for ID 1", () => {
    expect(generateDateFromID(1, startDate)).toBe("2020-01-01");
  });

  it("generates correct date for ID 10", () => {
    expect(generateDateFromID(10, startDate)).toBe("2020-01-10");
  });

  it("generates correct date for ID 100", () => {
    expect(generateDateFromID(100, startDate)).toBe("2020-04-08");
  });

  it("generates correct date for ID 365", () => {
    expect(generateDateFromID(365, startDate)).toBe("2020-12-30");
  });

  it("generates correct date for ID 0", () => {
    expect(generateDateFromID(0, startDate)).toBe("2019-12-31");
  });

  it("generates correct date for a negative ID", () => {
    expect(generateDateFromID(-1, startDate)).toBe("2019-12-30");
  });

  it("generates correct date for a very large ID", () => {
    expect(generateDateFromID(10000, startDate)).toBe("2047-05-18");
  });
});
