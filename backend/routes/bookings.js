const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.post("/", (req, res) => {
  const {
    user_id,
    show_id,
    seats,
    total_amount,
  } = req.body;

  db.query(
    "INSERT INTO bookings(user_id,show_id,seats,total_amount) VALUES(?,?,?,?)",
    [
      user_id,
      show_id,
      seats,
      total_amount,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Booking Saved",
      });
    }
  );
});

router.get("/:userId", (req, res) => {
  db.query(
    "SELECT * FROM bookings WHERE user_id=?",
    [req.params.userId],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
});

module.exports = router;