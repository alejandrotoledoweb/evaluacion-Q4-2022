import React, { FC } from "react";

interface ButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
