import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import api from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    api.get("/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" ||
      movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Welcome To CineVerse</h1>
        <p>
          Book Movies Anytime, Anywhere
        </p>
      </div>

      <div className="search-section">

        <input
          type="text"
          placeholder="Search movies..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="genre-buttons">
          <button
            onClick={() =>
              setGenre("All")
            }
          >
            All
          </button>

          <button
            onClick={() =>
              setGenre("Action")
            }
          >
            Action
          </button>

          <button
            onClick={() =>
              setGenre("Drama")
            }
          >
            Drama
          </button>

          <button
            onClick={() =>
              setGenre("Sci-Fi")
            }
          >
            Sci-Fi
          </button>
        </div>
      </div>

      <div className="section-title">
        <h2>Now Showing</h2>
      </div>

      <div className="movies-container">
        {filteredMovies.map(
          (movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          )
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;