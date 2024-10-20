import React from 'react';

function YearFilter({ year, onYearChange }) {
  return (
    <div className="year-filter">
      <label htmlFor="year">Filter by Year: </label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={(e) => onYearChange(e.target.value)}
        placeholder="Enter year"
      />
    </div>
  );
}

export default YearFilter;