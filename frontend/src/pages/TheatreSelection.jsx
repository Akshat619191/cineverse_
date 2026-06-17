import { useNavigate, useParams } from "react-router-dom";

function TheatreSelection() {
  const navigate = useNavigate();
  const { id } = useParams();

  const theatres = [
    "PVR Cinemas",
    "INOX",
    "Cinepolis",
    "Wave Cinemas"
  ];

  const timings = [
    "10:00 AM",
    "01:00 PM",
    "04:00 PM",
    "07:00 PM",
    "10:00 PM"
  ];

  const handleBooking = (theatre, time) => {
    navigate(`/seats/${id}`, {
      state: {
        theatre,
        time,
      },
    });
  };

  return (
    <div className="theatre-page">
      <h1>Select Theatre & Show Time</h1>

      {theatres.map((theatre) => (
        <div
          key={theatre}
          className="theatre-card"
        >
          <h2>{theatre}</h2>

          <div className="timing-container">
            {timings.map((time) => (
              <button
                key={time}
                className="timing-btn"
                onClick={() =>
                  handleBooking(
                    theatre,
                    time
                  )
                }
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TheatreSelection;