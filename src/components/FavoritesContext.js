import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavoriteMovie = (movieId) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
