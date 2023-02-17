import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./app";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Gif } from "./utils/interfaces/gif.interface";

const axiosMock = new MockAdapter(axios);

describe("App component", () => {
  it("Should render the title", () => {
    render(<App />);
    const title = screen.getByText(/gif gallery/i);
    expect(title).toBeVisible();
  });

  it("should add a gif to grid", async () => {
    axiosMock.onPost().reply(200, [{ id: 1, url: "gift1.com", author_id: 8 }] as Gif[]);
    render(<App />);
    const input = screen.getByPlaceholderText("GIFT URL");
    const button = screen.getByText("Agregar");
    expect(input).toHaveValue("");
    expect(button).toBeVisible();
    fireEvent.change(input, { target: { value: "gift1.com" } });
    fireEvent.click(button);
    expect(input).toHaveValue("gift1.com");
    // await waitFor(() => {
    //   screen.getByAltText("gift1.com");
    // });
  });
});
