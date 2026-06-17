import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img
        src={movie.poster}
        alt={movie.title}
      />

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>{movie.genre}</p>

        <p>⭐ {movie.rating}</p>

        <button
          className="book-btn"
          onClick={() =>
            navigate(`/movie/${movie.id}`)
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MovieCard;