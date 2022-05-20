import { reverseString } from "./reverse";

describe("reverse string test", () => {
  it("should return a string ", () => {
    expect(typeof reverseString("sharan")).toBe("string");
  });
});
