import React from "react";

export interface FieldSelectionOption {
  label: string;
  value: number;
}

interface FieldSelectProps {
  options: FieldSelectionOption[];
  value?: number;
  label: string;
  setField: any;
}

const FieldSelect: React.FC<FieldSelectProps> = ({
  options,
  value,
  label,
  setField,
}) => {
  const handleChangeFieldSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setField(+event.target.value);
  };

  const optionsJSX = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={handleChangeFieldSelect}>
        {optionsJSX}
      </select>
    </div>
  );
};

export default FieldSelect;
