import axios from "axios";
import { Gif } from "../utils/interfaces/gif.interface";

const API_URL = "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws";

export const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: { "Content-Type": "application/json" },
});

export const addGif = async (newGif: Gif) => {
  const { data } = await axiosInstance.post<Gif>("", newGif);
  return data;
};

// export class GifService {
//   static async getGifs() {
//     try {
//       const { data } = await axiosInstance.get<Gif[]>(`?author_id=${AUTHOR_ID}`);
//       return data;
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   static async addNewGif(gif: Gif) {
//     try {
//       const body = {
//         url: gif.url,
//         author_id: gif.author_id,
//       };
//       const { data } = await axiosInstance.post("", body);
//       return data;
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   static async deleteGif(gif: Gif) {
//     try {
//       const body = {
//         id: gif.id,
//         url: gif.url,
//         author_id: AUTHOR_ID,
//       };
//       const { data } = await axiosInstance.delete("", body);
//       if (data) {
//         return data;
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
