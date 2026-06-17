import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import MovieDetails from "./pages/MovieDetails";
import TheatreSelection from "./pages/TheatreSelection";
import SeatSelection from "./pages/SeatSelection";
import BookingSummary from "./pages/BookingSummary";
import MyBookings from "./pages/MyBookings";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Movie Details */}
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        {/* Theatre Selection */}
        <Route
          path="/theatre/:id"
          element={<TheatreSelection />}
        />

        {/* Seat Selection */}
        <Route
          path="/seats/:id"
          element={<SeatSelection />}
        />

        {/* Booking Summary */}
        <Route
          path="/booking"
          element={<BookingSummary />}
        />

        {/* My Bookings */}
        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;