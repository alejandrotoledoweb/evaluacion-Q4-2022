import { render, screen, fireEvent } from "@testing-library/react";
import GifCard from "./GifCard";

describe("GifCard", () => {
  const onClick = jest.fn();
  it("should render gif card", () => {
    render(
      <GifCard
        image={"https://media.tenor.com/Lk1coQ37K0MAAAAS/the-avengers-avengers.gif"}
        gifAlt="Imagen gif"
        description={"description"}
      />
    );
    expect(screen.getByAltText("Imagen gif")).toBeVisible();
  });

  it("should render the delete icon", () => {
    render(
      <GifCard
        image={"https://media.tenor.com/Lk1coQ37K0MAAAAS/the-avengers-avengers.gif"}
        gifAlt="Imagen gif"
        description={"description"}
        onClick={onClick}
      />
    );
    const deleteIcon = screen.getByAltText("delete-icon");
    expect(deleteIcon).toBeVisible();
    fireEvent.click(deleteIcon);
    expect(onClick).toHaveBeenCalled();
  });
});
