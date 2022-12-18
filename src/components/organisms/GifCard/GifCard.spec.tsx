import { render, screen } from "@testing-library/react";
import { GifCard } from "./GifCard";

const gif = {
  id: 160,
  url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
  author_id: 8,
};

describe("GifCard", () => {
  it("should render the gifCard image", () => {
    render(<GifCard gif={gif} />);
    const gifInput = screen.getByAltText(
      "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif"
    );
    expect(gifInput).toBeVisible();
  });
});
