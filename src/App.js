import { useEffect, useState } from "react";
import "./App.css";
import { reduceCarsByCarModels } from "./helpers/reduce-cars-by-car-models.ts";

const cars = reduceCarsByCarModels([
  { id: 1, carmodel: 1, patrol: "diesel" },
  { id: 2, carmodel: 2, patrol: "diesel" },
  { id: 3, carmodel: 1, patrol: "benzine" },
  { id: 4, carmodel: 3, patrol: "diesel" },
  { id: 5, carmodel: 1, patrol: "hybrid" },
  { id: 6, carmodel: 6, patrol: "diesel" },
  { id: 7, carmodel: 6, patrol: "diesel" },
  { id: 8, carmodel: 6, patrol: "benzine" },
  { id: 9, carmodel: 6, patrol: "diesel" },
  { id: 10, carmodel: 3, patrol: "benzine" },
  { id: 11, carmodel: 3, patrol: "benzine" },
  { id: 12, carmodel: 3, patrol: "benzine" },
  { id: 13, carmodel: 1, patrol: "diesel" },
  { id: 14, carmodel: 1, patrol: "diesel" },
  { id: 15, carmodel: 1, patrol: "diesel" },
  { id: 16, carmodel: 1, patrol: "diesel" },
  { id: 17, carmodel: 1, patrol: "diesel" },
  { id: 18, carmodel: 4, patrol: "hybrid" },
  { id: 19, carmodel: 4, patrol: "diesel" },
  { id: 21, carmodel: 4, patrol: "diesel" },
  { id: 22, carmodel: 4, patrol: "hybrid" },
]);

function App() {
  const [data, setData] = useState(cars);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://abstract-brand-121412.appspot.com/cars"
  //     );
  //     const parsedData = await response.json();

  //     setData(parsedData);
  //   };

  //   fetchData();
  // }, []);

  console.log({ data });

  const carsLIst = data.map((car) => (
    <tr className="table__row">
      <td className="table__col">{car.model}</td>
      <td className="table__col">{car.fuel}</td>
      <td className="table__col">{car.count}</td>
    </tr>
  ));

  return (
    <div className="App">
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__col">Car Title</th>
            <th className="table__col">Fuel Type</th>
            <th className="table__col">Count</th>
          </tr>
        </thead>
        <tbody className="table__body">{carsLIst}</tbody>
      </table>
    </div>
  );
}

export default App;
