import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("should render button", () => {
    render(<Button>Agregar</Button>);
    const button = screen.getByText("Agregar");
    expect(button).toBeVisible();
  });
  it("should call the onClick event", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Agregar</Button>);
    const button = screen.getByText("Agregar");
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(button).toHaveBeenCalled();
  });
});
