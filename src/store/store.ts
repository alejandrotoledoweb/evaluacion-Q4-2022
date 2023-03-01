import { makeAutoObservable, runInAction } from "mobx";
import { Gif } from "../utils/interfaces/gif.interface";
import { GifService } from "../services/gifServices/gif.service";
import { AUTHOR_ID, BASE_URL } from "../utils/constants/gifUrlConstants";
import axios from "axios";
import { stringify } from "querystring";

const AllGifs = [
  {
    id: 160,
    url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
    author_id: 8,
  },
  {
    id: 161,
    url: "https://media.tenor.com/OPY5wP4jY7cAAAAj/avengers-endgame.gif",
    author_id: 8,
  },
  {
    id: 162,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAM/avengers-marvel-cinematic-universe.gif",
    author_id: 8,
  },
];

class Store {
  AllGifs: Gif[] = [];
  newGif: Gif = {
    url: "",
    author_id: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getAllGifs() {
    const returnedGifs = await GifService.getGifs();
    // console.log(returnedGifs);
    runInAction(() => {
      this.AllGifs = returnedGifs;
    });
  }

  async addNewGif(gif: Gif) {
    const newGif = await GifService.addNewGif(gif);
    runInAction(() => {
      this.AllGifs = [...this.AllGifs, newGif];
    });
  }

  async deleteGif(gifDelete: Gif) {
    const deletedGif = await GifService.deleteGif(gifDelete);

    runInAction(() => {
      const updatedGifs = this.AllGifs.filter(gif => gif.id !== gifDelete.id);
      this.AllGifs = updatedGifs;
    });
  }
}

const store = new Store();
export default store;
