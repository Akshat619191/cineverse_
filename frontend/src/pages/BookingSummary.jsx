import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

function BookingSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  const seats = location.state?.seats || [];

  const handleBooking = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await api.post("/bookings", {
        user_id: user.id,
        show_id: 1,
        seats: seats.join(","),
        total_amount: seats.length * 250,
      });

      alert("Booking Successful");

      navigate("/my-bookings");
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="summary-page">
      <h1>Booking Summary</h1>

      <h2>Selected Seats</h2>

      <p>{seats.join(", ")}</p>

      <h2>Total Amount</h2>

      <p>₹{seats.length * 250}</p>

      <button
        className="book-btn"
        onClick={handleBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingSummary;