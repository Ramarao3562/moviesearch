import React, { useState } from 'react';

function MovieSearch() {
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch movie data
  async function fetchMovieData(query) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9df39e7a8954e7b111dfdeed36e1ade4&query=${query}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMovieData(data.results);
      setError(null); // Clear previous errors if successful
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setError("An error occurred while fetching data. Please try again.");
    }
  }

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovieData(query);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <ul>
        {movieData.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
