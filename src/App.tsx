import { useEffect, useState, Dispatch } from "react";
import "./App.css";
import FieldSelect, {
  FieldSelectionOption,
  // @ts-ignore
} from "./components/FieldSelect.tsx";
import React from "react";
// @ts-ignore
import FieldInput from "./components/FieldInput.tsx";
// @ts-ignore
import { calculateTax } from "./helpers/calculate-tax.helper.ts";

interface Field {
  value: string;
  label: string;
  options?: FieldSelectionOption[];
  type: string;
}

export type SetFieldType = Dispatch<React.SetStateAction<Field>>;

function App() {
  const [typeEngine, setTypeEngine] = useState<number>();
  const [capacityEngine, setCapacityEngine] = useState<number>();
  const [costCar, setCostCar] = useState<number>();
  const [typeEngineOptions, setTypeEngineOptions] = useState<
    FieldSelectionOption[]
  >([]);
  const [kurs, setKurs] = useState<number>(0);
  const [result, setResult] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://abstract-brand-121412.appspot.com/tax"
      );
      const tax = await response.json();

      const taxes = Object.entries(tax as { [key: string]: number });

      setTypeEngine(Object.values(tax)[0] as number);
      setTypeEngineOptions(
        taxes
          .filter(([prop]) => prop !== "kurs")
          .map(([label, value]) => ({
            label,
            value,
          }))
      );
      setKurs(tax.kurs);
    };

    fetchData();
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeEngine && capacityEngine && kurs && costCar) {
      setResult(calculateTax(typeEngine, capacityEngine, kurs, costCar));
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <FieldSelect
          setField={setTypeEngine}
          value={typeEngine}
          options={typeEngineOptions}
          label="Type Engine"
        />
        <FieldInput
          setField={setCapacityEngine}
          value={capacityEngine}
          label="Engine Capacity"
        />
        <FieldInput setField={setCostCar} value={costCar} label="Car Cost" />
        <button>COUNT</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
