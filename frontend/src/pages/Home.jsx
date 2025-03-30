import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Wich", description: "morreu cachorro matou o mundo" },
    { id: 2, title: "shrek", description: "oger living in the woods" },
    { id: 3, title: "ograo", description: "filme novo" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Home;
