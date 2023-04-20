import { getData } from "../getData";

describe("getData", () => {
  const cars1 = {
    entries: [
      { id: 1, carmodel: 1, patrol: "diesel" },
      { id: 2, carmodel: 2, patrol: "diesel" },
      { id: 3, carmodel: 1, patrol: "benzine" },
      { id: 4, carmodel: 3, patrol: "diesel" },
      { id: 5, carmodel: 1, patrol: "hybrid" },
    ],
  };

  const models1 = {
    carModel: {
      1: "BMW",
      2: "Audi",
      3: "Mercedes",
      4: "Volkswagen",
      5: "Opel",
    },
  };

  test("should return correct data for input object 1", () => {
    const expected = [
      { title: "BMW", fluent: "diesel", count: 1 },
      { title: "Audi", fluent: "diesel", count: 1 },
      { title: "BMW", fluent: "benzine", count: 1 },
      { title: "Mercedes", fluent: "diesel", count: 1 },
      { title: "BMW", fluent: "hybrid", count: 1 },
    ];
    const result = getData(cars1, models1);
    expect(result).toEqual(expected);
  });

  const cars2 = {
    entries: [
      { id: 1, carmodel: 1, patrol: "diesel" },
      { id: 2, carmodel: 2, patrol: "diesel" },
      { id: 3, carmodel: 1, patrol: "diesel" },
      { id: 4, carmodel: 3, patrol: "diesel" },
      { id: 5, carmodel: 1, patrol: "diesel" },
      { id: 6, carmodel: 2, patrol: "diesel" },
      { id: 7, carmodel: 1, patrol: "diesel" },
    ],
  };

  const models2 = {
    carModel: {
      1: "BMW",
      2: "Audi",
      3: "Mercedes",
      4: "Volkswagen",
      5: "Opel",
    },
  };

  test("should return correct data for input object 2", () => {
    const expected = [
      { title: "BMW", fluent: "diesel", count: 4 },
      { title: "Audi", fluent: "diesel", count: 2 },
      { title: "Mercedes", fluent: "diesel", count: 1 },
    ];
    const result = getData(cars2, models2);
    expect(result).toEqual(expected);
  });
});
