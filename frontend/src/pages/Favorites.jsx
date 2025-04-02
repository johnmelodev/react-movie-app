import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  // Pega a lista de favoritos do Context
  const { favorites } = useMovieContext();

  // Se existirem favoritos, mostra a lista
  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Seus Filmes Favoritos</h2>
        <div className="movies-grid">
          {/* Mapeia cada filme favorito para um MovieCard */}
          {favorites.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id} // key é necessária para o React renderizar a lista
            />
          ))}
        </div>
      </div>
    );
  }

  // Se não houver favoritos, mostra mensagem
  return (
    <div className="favorites-empty">
      <h2>Nenhum Filme Favorito Ainda</h2>
      <p>
        Comece adicionando filmes aos seus favoritos, e eles aparecerão aqui
      </p>
    </div>
  );
}

export default Favorites;
