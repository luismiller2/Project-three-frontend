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

function App() {
  return (
    <div>
    <header>
      <nav>
        <Link to="/">Home &nbsp;</Link>
        <Link to="/workouts">Workouts &nbsp;</Link>
        <Link to="/spiritual">Bible &nbsp;</Link>
        <Link to="/mentalExercise">Mental Exercises &nbsp;</Link>
        <Link to="/signup">Signup &nbsp;</Link>
        <Link to="/login">Login &nbsp;</Link>
        <Link to="/users">Users &nbsp;</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/users" element={<User />} />
      <Route path="/workouts" element={<Workout />} />
      <Route path="/spiritual" element={<Spiritual />} />
      <Route path="/mentalExercise" element={<MentalExercise />} />
    </Routes>
    </div>
  );
}

export default App;
