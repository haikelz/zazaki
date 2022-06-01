import { Routes, Route } from "solid-app-router";
import Header from "./components/header";
import Home from "./views/home";
import Projects from "./views/projects";
import Kontak from "./views/kontak";
import Tentang from "./views/tentang";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </>
  );
};

export default App;
