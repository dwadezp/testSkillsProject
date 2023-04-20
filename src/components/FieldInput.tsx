import React from "react";

interface FieldInputProps {
  value?: number;
  label: string;
  setField: any;
}

const FieldInput: React.FC<FieldInputProps> = ({ value, label, setField }) => {
  const handleOnChangeFieldInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setField(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleOnChangeFieldInput} />
    </div>
  );
};

export default FieldInput;
