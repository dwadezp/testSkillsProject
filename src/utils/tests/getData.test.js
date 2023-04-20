import { getData } from "../getData";

describe("getData function", () => {
  test("Renders correctly with all props", () => {
    const result = getData(75, 150, 41, 150);
    expect(result).toEqual(6611.25);
  });

  test("Renders correctly without all props", () => {});
  const result = getData(150, 41, 150);
  expect(result).not.toBeDefined();
});
