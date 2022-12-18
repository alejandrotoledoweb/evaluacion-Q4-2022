import axios from "axios";
import { GifService } from "./gif.service";
import MockAdapter from "axios-mock-adapter";
import { Gif } from "../../utils/interfaces/gif.interface";

const axiosMock = new MockAdapter(axios);

const gifExample = {
  id: 7,
  url: "example.com",
  author_id: 3,
};

describe("Gif Service", () => {
  it("should get gif array", async () => {
    axiosMock.onGet().reply(200, [
      {
        id: 7,
        url: "example.com",
        author_id: 3,
      },
    ] as Gif[]);
    const users = await GifService.getGifs();
    expect(users).toBeDefined();
    expect(users).toBeInstanceOf(Array);
  });

  it("should delete gif", async () => {
    axiosMock.onDelete().reply(200, [
      {
        id: 7,
        url: "example.com",
        author_id: 3,
      },
    ] as Gif[]);
    const users = await GifService.deleteGif(gifExample);
    expect(users).toBeDefined();
    expect(users).toBeInstanceOf(Object);
  });

  it("should create gif", async () => {
    axiosMock.onPost().reply(200, [
      {
        id: 7,
        url: "example.com",
        author_id: 3,
      },
    ] as Gif[]);
    const users = await GifService.addNewGif(gifExample);
    expect(users).toBeDefined();
    expect(users).toBeInstanceOf(Object);
  });
});
