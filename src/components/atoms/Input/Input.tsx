import React, { FC } from "react";

export interface InputProps {
  placeholder: string;
}

export const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="input-container">
      <input placeholder={placeholder}></input>
    </div>
  );
};
