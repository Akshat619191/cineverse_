const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM movies",
    (err, result) => {
      if (err)
        return res.status(500).json(err);

      res.json(result);
    }
  );
});

router.post("/", (req, res) => {
  const {
    title,
    genre,
    language,
    duration,
    rating,
    poster,
    description,
  } = req.body;

  db.query(
    `INSERT INTO movies
    (title,genre,language,duration,rating,poster,description)
    VALUES(?,?,?,?,?,?,?)`,
    [
      title,
      genre,
      language,
      duration,
      rating,
      poster,
      description,
    ],
    (err, result) => {
      if (err)
        return res.status(500).json(err);

      res.json({
        success: true,
      });
    }
  );
});

module.exports = router;