export const calculateTax = (
  typeEngine: number,
  capacityEngine: number,
  kurs: number,
  costCar: number
) => {
  return ((typeEngine * capacityEngine) / 1000) * kurs + costCar * kurs;
};
