import { useState } from "react";
import api from "../services/api";

function Admin() {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    language: "",
    duration: "",
    rating: "",
    poster: "",
    description: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/movies", movie);

      alert("Movie Added Successfully");

      setMovie({
        title: "",
        genre: "",
        language: "",
        duration: "",
        rating: "",
        poster: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error Adding Movie");
    }
  };

  return (
    <div className="auth-container">
      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >
        <h1>Add Movie</h1>

        <input
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleChange}
        />

        <input
          name="genre"
          placeholder="Genre"
          value={movie.genre}
          onChange={handleChange}
        />

        <input
          name="language"
          placeholder="Language"
          value={movie.language}
          onChange={handleChange}
        />

        <input
          name="duration"
          placeholder="Duration"
          value={movie.duration}
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleChange}
        />

        <input
          name="poster"
          placeholder="Poster URL"
          value={movie.poster}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={movie.description}
          onChange={handleChange}
        />

        <button type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default Admin;