import React, { useState, useEffect } from 'react';

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching movies from an API based on the selected category
    const fetchMovies = async () => {
      try {
        // Replace this with actual API fetch
        const response = await fetch(`API_URL/${category}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      <h2>{category} Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`MOVIE_POSTER_URL/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
