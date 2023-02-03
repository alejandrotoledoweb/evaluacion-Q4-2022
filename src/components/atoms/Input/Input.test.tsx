import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input placeholder={"Ingresar gif"} />);
    const input = screen.getByPlaceholderText("Ingresar gif");
    expect(input).toBeVisible();
  });
  it("should change text", () => {
    render(<Input placeholder={"Gif"} />);
    const input = screen.getByPlaceholderText("Gif");
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "Another gif" } });
    expect(input).toHaveValue("Another gif");
  });
});