import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./app";

describe("App component", () => {
  it("Should render the title", () => {
    render(<App />);
    const title = screen.getAllByText(/gif gallery/i);
    expect(title).toBeVisible();
  });

  it("should add a gif to grid", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("GIFT URL");
    const button = screen.getByText("Agregar");

    expect(input).toHaveValue("");
    expect(button).toBeVisible();

    fireEvent.change(input, { target: { value: "gift1.com" } });
    fireEvent.click(button);

    expect(input).toHaveValue("gift1.com");

    await waitFor(() => {
      screen.getByAltText("gift1.com");
    });
  });
});
