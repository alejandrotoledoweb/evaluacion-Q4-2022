import React from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input/Input";
import "./searchBar.scss";

interface SearchProps {
  handleChange: (value: string) => void;
  handleAdd: () => void;
  classError: boolean;
}

export const SearchBar: React.FC<SearchProps> = ({
  handleChange,
  handleAdd,
  classError = false,
}) => {
  return (
    <div className="searchBar-container">
      <Input
        placeholder="Gift URL"
        width="300px"
        inputId="buscar"
        onChange={handleChange}
        classError={classError}
      />
      <Button variant="primary" testId="nuevo" onClick={handleAdd}>
        Agregar
      </Button>
    </div>
  );
};
