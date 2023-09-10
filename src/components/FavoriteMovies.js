import React, { useState } from 'react';

const FavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = FavoriteMovies.filter((movie) => movie.id !== movieId);
    setFavoriteMovies(updatedFavorites);
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {FavoriteMovies.map((movie) => (
          <li key={movie.id}>
            <img src={`MOVIE_POSTER_URL/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMovies;

