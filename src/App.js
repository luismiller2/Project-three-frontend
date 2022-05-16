import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './components/users'
import Workout from './components/workouts'
import Spiritual from './components/spiritual'
import MentalExercise from './components/mentalExercise'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
// import WorkoutImage from './pages/WorkoutImage';
import ExerciseDetails from './components/exerciseDetails';

function App() {
  return (
    <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<User />} />
      <Route path="/workouts" element={<Workout />} />
      <Route path="/workouts/:id" element={<ExerciseDetails />} />
      <Route path="/spiritual" element={<Spiritual />} />
      <Route path="/mentalExercise" element={<MentalExercise />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
