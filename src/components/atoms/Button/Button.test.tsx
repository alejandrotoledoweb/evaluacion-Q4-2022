import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("should render button", () => {
    render(<Button>Agregar</Button>);
    const button = screen.getByText("Agregar");
    expect(button).toBeVisible();
  });
});
