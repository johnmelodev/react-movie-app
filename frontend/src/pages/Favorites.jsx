import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            // uma forma de fazer o filtro da search bar
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="Favorites-empty">
      <h2>No Favorites Movies Yet</h2>
      <p>Start adding movies to your Favorites, and they will apear here</p>
    </div>
  );
}

export default Favorites;
