export const getData = (cars, models) => {
  const entries = cars.entries;
  const carModel = models.carModel;
  const result = [];

  entries.forEach((entry) => {
    const carModelId = entry.carmodel;
    const carModelTitle = carModel[carModelId];
    const petrol = entry.patrol;

    const existingResultObj = result.find(
      (obj) => obj.title === carModelTitle && obj.fluent === petrol
    );

    if (existingResultObj) {
      existingResultObj.count++;
    } else {
      result.push({
        title: carModelTitle,
        fluent: petrol,
        count: 1,
      });
    }
  });

  return result;
};

