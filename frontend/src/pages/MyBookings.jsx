import { useEffect, useState } from "react";
import api from "../services/api";

function MyBookings() {
  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    api
      .get(`/bookings/${user.id}`)
      .then((res) => {
        setBookings(res.data);
      });
  }, []);

  return (
    <div className="summary-page">
      <h1>My Bookings</h1>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="booking-card"
        >
          <h3>
            Seats: {booking.seats}
          </h3>

          <p>
            Total: ₹
            {booking.total_amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;