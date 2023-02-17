import { createContext, FC, useContext } from "react";
import { Gif } from "../utils/interfaces/gif.interface";
import useGifs from "./user-gifs/use-gifs";

export interface GifStateContext {
  allGifs: Gif[];
  addGif: (newGif: Gif) => void;
}
export const GifContext = createContext<GifStateContext>({} as unknown as GifStateContext);

export const useGifsContext = () => useContext(GifContext);

export interface GifsProviderProps {
  children: React.ReactNode;
  initialValue?: Partial<GifStateContext>;
}
export const GifsProvider: FC<GifsProviderProps> = ({ children, initialValue }) => {
  const values = useGifs(initialValue);
  return <GifContext.Provider value={values}>{children}</GifContext.Provider>;
};

// export const PlayersProvider: FC<PlayersProviderProps> = ({ children, initialValue }) => {
//   const values = usePlayers(initialValue)
//   return <PlayersContext.Provider value={values}>{children}</PlayersContext.Provider>
// }
