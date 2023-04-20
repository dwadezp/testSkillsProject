import { reduceCarsByCarModels } from "./helpers/reduce-cars-by-car-models";

test("function test example", () => {
  const someFunction = (a, b) => a + b;
  expect(someFunction(1, 2)).toBe(3);
});

describe("reduceCarsByCarModels", () => {
  const cars = [
    { id: 1, carmodel: 1, patrol: "diesel" },
    { id: 2, carmodel: 2, patrol: "diesel" },
    { id: 3, carmodel: 1, patrol: "benzine" },
    { id: 4, carmodel: 1, patrol: "diesel" },
    { id: 5, carmodel: 3, patrol: "diesel" },
    { id: 6, carmodel: 2, patrol: "benzine" },
    { id: 7, carmodel: 3, patrol: "diesel" },
  ];

  const expected = [
    { model: "BMW", fuel: "diesel", count: 2 },
    { model: "Audi", fuel: "diesel", count: 1 },
    { model: "Mercedes", fuel: "diesel", count: 2 },
    { model: "BMW", fuel: "benzine", count: 1 },
    { model: "Audi", fuel: "benzine", count: 1 },
  ];

  test("should return empty array if input is empty", () => {
    expect(reduceCarsByCarModels([])).toEqual([]);
  });

  test("should handle input with single car", () => {
    const singleCar = [
      { id: 1, carmodel: 1, patrol: "diesel" },
      { id: 1, carmodel: 1, patrol: "diesel" },
      { id: 2, carmodel: 2, patrol: "benzine" },
      { id: 3, carmodel: 3, patrol: "diesel" },
      { id: 4, carmodel: 3, patrol: "diesel" },
    ];
    const expectedSingleCar = [
      { model: "BMW", fuel: "diesel", count: 2 },
      { model: "Audi", fuel: "benzine", count: 1 },
      { model: "Mercedes", fuel: "diesel", count: 2 },
    ];

    expect(reduceCarsByCarModels(singleCar)).toEqual(expectedSingleCar);
  });
});
