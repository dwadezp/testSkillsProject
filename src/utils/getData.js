export const getData = (rate, volume, exRate, price) => {
  let result;

  if (rate && volume && exRate && price) {
    result = ((rate * volume) / 1000) * exRate + price * exRate;
  }

  return result;
};
