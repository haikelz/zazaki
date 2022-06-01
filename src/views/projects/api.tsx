import { createEffect, createSignal } from "solid-js";
import Gambar from "./projectsList";

const API = () => {
  // example fetch API in solidJS
  const [gambar, setGambar] = createSignal([]);

  let getGambar = async () => {
    try {
      let response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=9"
      ).then((res) => res.json());

      setGambar(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  createEffect(() => {
    getGambar();
  });

  return <div>Contoh</div>;
};

export default API;
