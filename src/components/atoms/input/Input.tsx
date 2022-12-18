import { FC, useEffect, useState } from "react";
import "./Input.scss";

export interface InputProps {
  initialValue?: string;
  placeholder?: string;
  width?: string;
  type?: string;
  onChange?(value: string): void;
  name?: string;
  inputId?: string;
  classError?: boolean;
}

export const Input: FC<InputProps> = ({
  initialValue = "",
  type = "text",
  placeholder,
  width,
  onChange = () => {},
  name,
  classError = false,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleOnChange = (event: any) => {
    const val = event.target.value;
    setValue(val);
    onChange(val);
  };

  return (
    <div style={{ width }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={`input ${classError ? "input--error" : ""} `}
        onChange={handleOnChange}
        name={name}
      ></input>
      {classError && <p className="input__message">URL no puede estar vacío</p>}
    </div>
  );
};
