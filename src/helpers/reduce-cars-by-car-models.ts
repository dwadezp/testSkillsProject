export interface Car {
  carmodel: number;
  patrol: string;
  count: number;
}

const carModel = {
  1: "BMW",
  2: "Audi",
  3: "Mercedes",
  4: "Volkswagen",
  5: "Opel",
  6: "Ford",
};

export function reduceCarsByCarModels(cars) {
  const counts = {};

  // count the duplicates
  cars.forEach((car) => {
    const key = car.carmodel + "-" + car.patrol;
    counts[key] = (counts[key] || 0) + 1;
  });

  // create a new array with the counts
  const result: Car[] = [];
  Object.keys(counts).forEach((key) => {
    const count = counts[key];
    const [carmodel, patrol] = key.split("-");
    result.push({ carmodel: Number(carmodel), patrol, count });
  });

  return result.map((car) => ({
    model: carModel[car.carmodel],
    fuel: car.patrol,
    count: car.count,
  }));
}
