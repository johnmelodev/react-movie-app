import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

// MovieCard recebe um filme como prop
const MovieCard = ({ movie }) => {
  // useMovieContext() nos dá acesso a todas as funções e dados do Context
  // Desestruturamos apenas o que precisamos: isFavorite, addToFavorites e removeFromFavorites
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  // Verifica se este filme específico está nos favoritos
  const favorite = isFavorite(movie.id);

  // Função que é chamada quando o usuário clica no botão de favoritos
  function onFavoritesClick(e) {
    e.preventDefault(); // Previne o comportamento padrão do botão

    // Se o filme já está nos favoritos, remove
    // Se não está, adiciona
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {/* Imagem do poster do filme */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          {/* Botão de favoritos que muda de estilo baseado no estado */}
          <button
            className={`Favorites-btn ${favorite ? "active" : ""}`}
            onClick={onFavoritesClick}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
