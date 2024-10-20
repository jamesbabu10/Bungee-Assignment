import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../api';

function MovieCard({ movie }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(movie.imdbID);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchDetails();
  }, [movie.imdbID]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="movie-card">
      <h2>{details.Title}</h2>
      <img src={details.Poster} alt={details.Title} />
      <p>Year: {details.Year}</p>
      <p>Box Office: {details.BoxOffice || 'N/A'}</p>
      <p>Ratings: {details.imdbRating}/10</p>
      <p>Plot: {details.Plot}</p>
    </div>
  );
}

export default MovieCard;