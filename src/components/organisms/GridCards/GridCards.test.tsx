import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import GridCards from "./GridCards";

describe("GridCards", () => {
  const onClick = jest.fn();

  const gifs = [
    { id: 43, url: "https://media.tenor.com/3MhDaiH-9ckAAAAC/captain-america.gif", author_id: 1 },
    { id: 549, url: "https://media.tenor.com/9LTaB5Ezn0UAAAAC/reface.gif", author_id: 1 },
    {
      id: 550,
      url: "https://media.tenor.com/32g9ZstNXGMAAAAC/avengers-endgame-captain-america.gif",
      author_id: 1,
    },
  ];
  it("should render gif card", () => {
    render(<GridCards images={gifs} />);
    const image1 = screen.getByAltText(
      "https://media.tenor.com/3MhDaiH-9ckAAAAC/captain-america.gif"
    );
    expect(image1).toBeVisible();
  });
});
