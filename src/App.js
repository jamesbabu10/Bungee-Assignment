import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import YearFilter from './components/YearFilter';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import { searchMovies } from './api';
import './App.css'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState('');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (title, page = 1) => {

    try {
      setError(null);
      setSearchTerm(title);
      const data = await searchMovies(title, year, page);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setCurrentPage(page);
      } else {
        setError(data.Error);
        setMovies([]);
        setTotalResults(0);
      }
    } catch (err) {
      setError('An error occurred while fetching movies. Please try again.');
      setMovies([]);
      setTotalResults(0);
    }
  };

  const handlePageChange = (newPage) => {
    handleSearch(searchTerm, newPage);
  };

  return (
    <div className="App">
      <h1>Movie Application</h1>
      <SearchBar onSearch={handleSearch} />
      <YearFilter year={year} onYearChange={setYear} />
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
      {totalResults > 0 && (
        <Pagination 
          currentPage={currentPage} 
          totalResults={totalResults} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
}

export default App;