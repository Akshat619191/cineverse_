import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

function SeatSelection() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const theatre =
    location.state?.theatre;

  const time =
    location.state?.time;

  const [
    selectedSeats,
    setSelectedSeats,
  ] = useState([]);

  const rows = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ];

  const handleSeatClick = (
    seat
  ) => {
    if (
      selectedSeats.includes(
        seat
      )
    ) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) =>
            s !== seat
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  return (
    <div className="seat-page">
      <h1>
        Select Your Seats
      </h1>

      <h2>{theatre}</h2>

      <h3>{time}</h3>

      <div className="screen">
        🎬 SCREEN
      </div>

      <div className="seat-layout">
        {rows.map((row) =>
          Array.from(
            { length: 8 },
            (_, i) => {
              const seat = `${row}${i + 1}`;

              return (
                <button
                  key={seat}
                  className={
                    selectedSeats.includes(
                      seat
                    )
                      ? "seat selected"
                      : "seat"
                  }
                  onClick={() =>
                    handleSeatClick(
                      seat
                    )
                  }
                >
                  {seat}
                </button>
              );
            }
          )
        )}
      </div>

      <h3>
        Selected Seats:
      </h3>

      <p>
        {selectedSeats.join(
          ", "
        )}
      </p>

      <button
        className="book-btn"
        onClick={() =>
          navigate(
            "/booking",
            {
              state: {
                seats:
                  selectedSeats,
                theatre,
                time,
              },
            }
          )
        }
      >
        Continue
      </button>
    </div>
  );
}

export default SeatSelection;