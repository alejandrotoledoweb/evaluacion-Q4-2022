import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./app";
import MockAdapter from "axios-mock-adapter";
import { Gif } from "./utils/interfaces/gif.interface";
import { axiosInstance } from "./services/gifServices/gif.service";

const axiosMock = new MockAdapter(axiosInstance);

describe("App component", () => {
  it("Should render the title", async () => {
    axiosMock.onGet("?author_id=8").reply(200, [
      {
        id: 86,
        url: "gifno1",
        author_id: 8,
      },
      {
        id: 161,
        url: "gifno2",
        author_id: 8,
      },
    ] as Gif[]);
    render(<App />);
    const title = screen.getByText("Gif Galery");
    expect(title).toBeVisible();
    await waitFor(() => {
      const gifCard = screen.getByAltText("gifno1");
      expect(gifCard).toBeVisible();
    });
  });
  it("should add a new gif to the list", async () => {
    axiosMock.onGet("?author_id=8").reply(200, [
      {
        id: 86,
        url: "gifno1",
        author_id: 8,
      },
      {
        id: 161,
        url: "gifno2",
        author_id: 8,
      },
    ] as Gif[]);

    axiosMock.onPost("").reply(200, {
      id: 162,
      url: "gifno3",
      author_id: 8,
    });

    render(<App />);
    const gifInput = screen.getByPlaceholderText("Gift URL");
    const gifButton = screen.getByText("Agregar");
    expect(gifInput).toBeDefined();
    expect(gifButton).toBeDefined();
    expect(gifButton).toBeVisible();
    expect(gifInput).toHaveTextContent("");

    fireEvent.change(gifInput, {
      target: {
        value: "gifno3",
      },
    });
    expect(gifInput).toHaveValue("gifno3");
    fireEvent.click(gifButton);

    await waitFor(() => {
      screen.getByAltText("gifno3");
    });
  });
  it("should delete gif to the list", async () => {
    axiosMock.onGet("?author_id=8").reply(200, [
      {
        id: 86,
        url: "gifno1",
        author_id: 8,
      },
      {
        id: 161,
        url: "gifno2",
        author_id: 8,
      },
    ] as Gif[]);

    render(<App />);
    const gifInput = screen.getByPlaceholderText("Gift URL");
    const gifButton = screen.getByText("Agregar");
    const gifCard = screen.queryByAltText("gifno1");
    const deleteIcon = screen.getAllByAltText("Delete icon");

    expect(gifInput).toBeVisible();
    expect(gifButton).toBeVisible();
    expect(deleteIcon[0]).toBeVisible();
    expect(gifCard).toBeInTheDocument();

    fireEvent.click(deleteIcon[0]);
    const deleteButton = screen.getByTestId("delete__button__2");
    expect(deleteButton).toBeVisible();

    fireEvent.click(deleteButton);
    await waitFor(() => {
      expect(gifCard).not.toBeInTheDocument();
    });
  });
});
