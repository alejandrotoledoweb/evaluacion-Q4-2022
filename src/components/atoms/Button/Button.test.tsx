import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  const onClick = jest.fn();
  it("should render button", () => {
    render(<Button onClick={onClick}>Agregar</Button>);
    const button = screen.getByText("Agregar");
    expect(button).toBeVisible();
  });
  it("should call the onClick event", () => {
    render(<Button onClick={onClick}>Agregar</Button>);
    const button = screen.getByText("Agregar");
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
