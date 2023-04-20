import { calculateTax } from "./helpers/calculate-tax.helper";

describe("positive flow", () => {
  test("helper correct result check", () => {
    const typeEngine = 2; // Petrol
    const capacityEngine = 2000; // 2.0 L
    const kurs = 1.5; // Currency exchange rate
    const costCar = 20000; // Car cost in foreign currency
    const expectedTax = 30006; // Expected tax value
    const calculatedTax = calculateTax(
      typeEngine,
      capacityEngine,
      kurs,
      costCar
    );

    expect(calculatedTax).toBe(expectedTax);
  });

  test("helper correct result check", () => {
    const typeEngine = 3; // Diesel
    const capacityEngine = 2500; // 2.5 L
    const kurs = 1.5; // Currency exchange rate
    const costCar = 30000; // Car cost in foreign currency
    const expectedTax = 45011.25; // Expected tax value
    const calculatedTax = calculateTax(
      typeEngine,
      capacityEngine,
      kurs,
      costCar
    );

    expect(calculatedTax).toBe(expectedTax);
  });

  test("helper correct result check", () => {
    const typeEngine = 0; // None
    const capacityEngine = 0; // 0.0 L
    const kurs = 0; // Currency exchange rate
    const costCar = 0; // Car cost in foreign currency
    const expectedTax = 0; // Expected tax value
    const calculatedTax = calculateTax(
      typeEngine,
      capacityEngine,
      kurs,
      costCar
    );

    expect(calculatedTax).toBe(expectedTax);
  });
});
