import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";
import { observer } from "mobx-react";
import "./app.scss";
import { SearchBar } from "./components/molecules/searchBar/searchBar";
import React, { useState, useEffect } from "react";
import store from "./store/store";
import { GifCard } from "./components/organisms/GifCard/GifCard";
import { AUTHOR_ID } from "./utils/constants/gifUrlConstants";
import { Gif } from "./utils/interfaces/gif.interface";

const App: React.FC = observer(() => {
  const [gifName, setGifName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

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

  useEffect(() => {
    store.getAllGifs();
  }, []);

  const addNewGif = () => {
    if (!gifName || gifName == null) {
      setError(true);
    } else {
      const newGif = {
        url: gifName,
        author_id: AUTHOR_ID,
      };
      store.addNewGif(newGif);
      setError(false);
      setGifName("");
    }
  };
  const handleChange = (gifUrl: string) => {
    setGifName(gifUrl);
  };

  const handleDelete = (gif: Gif) => {
    store.deleteGif(gif);
  };
  return (
    <div className="app">
      <h2 className="title">Gif Galery</h2>
      <SearchBar handleChange={handleChange} handleAdd={addNewGif} classError={error} />

      <div className="app__gifs">
        {store?.AllGifs?.map(gif => (
          <GifCard gif={gif} key={Math.random()} onDelete={() => handleDelete(gif)} />
        ))}
        {!store?.AllGifs && (
          <div>
            <img className="app__icon" src={WarningIcon} alt="Warning icon" />
            <p className="app__empty">No hay Gifs</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default App;
