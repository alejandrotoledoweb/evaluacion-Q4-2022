import { render, screen, fireEvent } from "@testing-library/react";
import GifCard from "./GifCard";

describe("GifCard", () => {
  it("should render gif card", () => {
    render(
      <GifCard
        image={
          "https://media.tenor.com/Lk1coQ37K0MAAAAS/the-avengers-avengers.gif"
        }
        gifAlt="Imagen gif"
        description={"description"}
      />
    );
    expect(screen.getByAltText("Imagen gif")).toBeVisible();
  });
});
