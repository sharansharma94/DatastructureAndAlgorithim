import { sort } from "./insertion";

describe("sorting test", () => {
  it("sort 1 item", () => {
    expect(sort([1])).toStrictEqual([1]);
  });

  it("sort 2 items", () => {
    expect(sort([3, 2])).toStrictEqual([2, 3]);
  });

  it("sort 4 items", () => {
    expect(sort([3, 2, 8, 6])).toStrictEqual([2, 3, 6, 8]);
  });
});
