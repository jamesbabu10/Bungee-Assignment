import React, { useState } from 'react';

function SearchBar(props) {
  const { onSearch } = props;

  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Please enter a movie title');
    } else {
      setError('');
      onSearch(title);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        required
      />
      <button type="submit">Search</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default SearchBar;