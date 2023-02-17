import React, { FC } from "react";

export interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <div className="input-container">
      <input placeholder={placeholder} onChange={(e) => onChange(e)}></input>
    </div>
  );
};
