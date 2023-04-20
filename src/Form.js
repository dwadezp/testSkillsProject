import { useEffect, useState } from "react";

import { getData } from "./utils/getData";

function Form() {
  const [data, setData] = useState();
  const [fuel, setFuel] = useState();
  const [volume, setVolume] = useState();
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const [exRate, setExRate] = useState();
  const [impost, setImpost] = useState();

  useEffect(() => {
    const url = "https://abstract-brand-121412.appspot.com/tax";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && fuel) {
      setRate(data[fuel]);
      setExRate(data.kurs);
    }
  }, [data, fuel, setExRate]);

  const getImpost = () => {
    const result = getData(rate, volume, exRate, price);
    setImpost(result);
  };

  return (
    <div>
      <h2>Калькулятор розмитнення 2023</h2>
      <form>
        <div>
          <select defaultValue=" Тип двигуна" value={fuel} onChange={(e) => setFuel(e.target.value)}>
            <option value="benzine">Бензин</option>
            <option value="diesel">Дизель</option>
          </select>
        </div>
        <div>
          <label>Об'єм двигуна (см3)</label>
          <input
            type="number"
            name="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <div>
          <label>Вартість авто закордоном EUR </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="button" onClick={getImpost}>
          Submit
        </button>
        <div>{impost ? impost : null}</div>
      </form>
    </div>
  );
}

export default Form;
