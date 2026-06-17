import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] =
    useState(null);

  useEffect(() => {
    api
      .get("/movies")
      .then((res) => {
        const selectedMovie =
          res.data.find(
            (m) =>
              m.id === Number(id)
          );

        setMovie(
          selectedMovie
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-page">
      <img
        src={movie.poster}
        alt={movie.title}
        className="details-poster"
      />

      <div>
        <h1>{movie.title}</h1>

        <p>
          Genre: {movie.genre}
        </p>

        <p>
          Rating: ⭐ {movie.rating}
        </p>

        <p>
          {movie.description}
        </p>

        <button
          className="book-btn"
          onClick={() =>
            navigate(
              `/theatre/${movie.id}`
            )
          }
        >
          Select Theatre
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;