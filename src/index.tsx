/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import "./index.css";
import App from "./App";
import Header from "./components/header";

render(
  () => (
    <Router>
      <div class="mx-5 my-4 sm:mt-4 leading-relaxed flex justify-center items-center dark:text-white">
        <div class="w-full sm:w-3/4 xl:w-3/5">
          <Header />
          <App />
        </div>
      </div>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
