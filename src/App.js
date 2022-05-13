import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home'
import User from './components/users'
import Workout from './components/workouts'
import Spiritual from './components/spiritual'
import MentalExercise from './components/mentalExercise'

function App() {
  return (
    <div>
    <body>
    <header>
      <nav>
        <Link to="/">Home &nbsp;</Link>
        <Link to="/users">Users &nbsp;</Link>
        <Link to="/workouts">Workouts &nbsp;</Link>
        <Link to="/spiritual">Bible &nbsp;</Link>
        <Link to="/mentalExercise">Mental Exercises &nbsp;</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="/workouts" element={<Workout />} />
      <Route path="/spiritual" element={<Spiritual />} />
      <Route path="/mentalExercise" element={<MentalExercise />} />
    </Routes>

    </body>
    </div>
  );
}

export default App;
