# 🎬 CineVerse - Movie Ticket Booking System

## 📌 Project Overview

CineVerse is a full-stack movie ticket booking application that allows users to browse movies, view details, select theatres, choose show timings, book seats, and manage their bookings. The application provides a modern and responsive user interface inspired by popular movie booking platforms.

---

## 🚀 Features

### User Features

* User Registration and Login
* Browse Available Movies
* View Movie Details
* Search Movies
* Filter Movies by Genre
* Select Theatre
* Choose Show Timings
* Select Seats
* View Booking Summary
* View My Bookings
* Responsive Design

### Admin Features

* Add New Movies
* Manage Movie Listings
* Store Movie Information in Database

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js

### Database

* MySQL

### Version Control & Deployment

* Git
* GitHub
* GitHub Actions (CI/CD)
* Vercel / Render

---

## 📂 Project Structure

```text
cineverse/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── movies.js
│   │   └── bookings.js
│   │
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MovieCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── TheatreSelection.jsx
│   │   │   ├── SeatSelection.jsx
│   │   │   ├── BookingSummary.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── Admin.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database Schema

### Users Table

| Column   | Type         |
| -------- | ------------ |
| id       | INT          |
| name     | VARCHAR(100) |
| email    | VARCHAR(100) |
| password | VARCHAR(255) |

### Movies Table

| Column      | Type         |
| ----------- | ------------ |
| id          | INT          |
| title       | VARCHAR(255) |
| genre       | VARCHAR(100) |
| language    | VARCHAR(50)  |
| duration    | VARCHAR(50)  |
| rating      | DECIMAL      |
| poster      | TEXT         |
| description | TEXT         |

### Bookings Table

| Column       | Type         |
| ------------ | ------------ |
| id           | INT          |
| user_id      | INT          |
| movie_id     | INT          |
| seats        | VARCHAR(255) |
| total_amount | DECIMAL      |
| booking_date | TIMESTAMP    |

---

## ⚙️ Installation Guide

### Clone Repository

```bash
git clone https://github.com/yourusername/cineverse.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=3001

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=cineverse

JWT_SECRET=cineverse_secret_key
```

---

## 🧪 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Movies

```http
GET /api/movies
POST /api/movies
```

### Bookings

```http
GET /api/bookings
POST /api/bookings
```

---

## 🔄 CI/CD Pipeline

GitHub Actions is used to automate:

* Dependency Installation
* Project Build Verification
* Continuous Integration
* Deployment Workflow

Workflow File:

```text
.github/workflows/deploy.yml
```

---

## 📸 Project Screenshots

* Home Page
* Login Page
* Movie Details Page
* Theatre Selection
* Seat Selection
* Booking Summary
* Admin Dashboard

---

## 🌐 Deployment

Frontend deployed using Vercel.

Example:

```text
https://cineverse.vercel.app
```

Backend deployed using Render.

---

## 👨‍💻 Author

**Akshat Sharma**

Bachelor of Engineering in Computer Science Engineering (Big Data Analytics)

Chandigarh University

---

## 📄 License

This project is developed for educational and academic purposes.
