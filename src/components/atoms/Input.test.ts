import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input />);
    const input = screen.getByPlaceholder("gif");
    expect(input).toBeVisible();
  });
});
