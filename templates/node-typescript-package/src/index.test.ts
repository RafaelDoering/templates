import sum from "./index";

test("sum should return 3 when called with 1 and 2", () => {
  expect(sum(1, 2)).toBe(3);
});
