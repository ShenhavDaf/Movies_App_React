import { useState, useEffect } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_KEY = ""; // Enter your key
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (movieName) => {
    const res = await fetch(`${API_URL}&s=${movieName}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
