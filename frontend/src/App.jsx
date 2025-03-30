import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";

import "../src/css/App.css";

const App = () => (
  <div>
    <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Favorites" element={<Favorites />} />
      </Routes>
    </main>
  </div>
);

export default App;
