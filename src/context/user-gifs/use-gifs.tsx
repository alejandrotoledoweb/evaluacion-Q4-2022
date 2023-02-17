import { useState } from "react";
import { addGif } from "../../services/gifServices";
import { Gif } from "../../utils/interfaces/gif.interface";
import { GifStateContext } from "../gif-context";

const useGifs = (initialValues?: Partial<GifStateContext>) => {
  const [allGifs, setAllGifs] = useState(initialValues?.allGifs || []);

  const addNewGif = async (newGif: Gif) => {
    const response = await addGif(newGif);
    setAllGifs(prevState => [...prevState, response]);
  };
  return { allGifs, addNewGif };
};

export default useGifs;
