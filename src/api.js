import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;


const BASE_URL = process.env.REACT_APP_API_URL;


export const searchMovies = async (title, year, page = 1) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: title,
          y: year,
          type: 'movie',
          page
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
        plot: 'full'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};