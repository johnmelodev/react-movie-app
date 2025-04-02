// Importações necessárias do React
// createContext: Cria o contexto
// useState: Gerencia o estado dos favoritos
// useContext: Permite usar o contexto em componentes filhos
// useEffect: Permite executar efeitos colaterais (como salvar no localStorage)
import { createContext, useState, useContext, useEffect } from "react";

// Criação do Context
// Este é o objeto que vai conter nossos dados e funções
const MovieContext = createContext();

// Hook personalizado para usar o contexto
// Isso facilita o uso do contexto em qualquer componente
export const useMovieContext = () => {
  // useContext retorna o valor atual do contexto
  return useContext(MovieContext);
};

// Componente Provider que vai envolver nossa aplicação
// children são todos os componentes filhos que terão acesso ao contexto
export const MovieProvider = ({ children }) => {
  // Estado para armazenar os filmes favoritos
  // useState([]) inicializa com um array vazio
  const [favorites, setFavorites] = useState([]);

  // Efeito para carregar os favoritos do localStorage quando a aplicação inicia
  useEffect(() => {
    // Pega os favoritos salvos no localStorage
    const storedFavs = localStorage.getItem("favorites");
    // Se existirem favoritos salvos, converte de string para array
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []); // Array vazio significa que só executa uma vez quando o componente monta

  // Efeito para salvar os favoritos no localStorage sempre que mudarem
  useEffect(() => {
    // Converte o array de favoritos para string e salva no localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Executa sempre que favorites mudar

  // Função para adicionar um filme aos favoritos
  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  // Função para remover um filme dos favoritos
  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Função para verificar se um filme está nos favoritos
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  // Objeto com todos os valores e funções que queremos compartilhar
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  // Retorna o Provider com todos os valores e funções
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
