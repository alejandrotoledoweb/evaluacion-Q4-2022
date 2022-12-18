import { render, screen } from "@testing-library/react";
import { SearchBar } from "./searchBar";

describe("SearchBar", () => {
  it("should render the input", () => {
    const handleChange = jest.fn();
    const handleAdd = jest.fn();
    render(<SearchBar classError={false} handleChange={handleChange} handleAdd={handleAdd} />);
    const gifInput = screen.getByPlaceholderText("Gift URL");
    const gifButton = screen.getAllByText("Agregar");
    expect(gifInput).toBeDefined();
    expect(gifButton).toBeDefined();
    expect(gifButton[0]).toBeVisible();
    expect(gifInput).toHaveTextContent("");
  });
  it("should render the input with error message", () => {
    const handleChange = jest.fn();
    const handleAdd = jest.fn();
    render(<SearchBar classError={true} handleChange={handleChange} handleAdd={handleAdd} />);
    const gifInput = screen.getByPlaceholderText("Gift URL");
    expect(gifInput).toBeDefined();
    expect(gifInput).toHaveTextContent("");
    const errorMessage = screen.getByText("URL no puede estar vacío");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeVisible();
  });
});
