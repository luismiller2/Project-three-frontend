import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate()


  let token = localStorage.getItem("authToken")
  // console.log("TOKEN", token);

  function logout(){
    localStorage.clear()
    navigate("/");
  }

    return (
        <div>
        <header>
        { token ? (
        <nav class="topnavbar">
        <Link to="/">Home &nbsp;</Link>
        <Link to="/spiritual">Bible &nbsp;</Link>
        <Link to="/workouts">Workouts &nbsp;</Link>
        <Link to="/mentalExercise">Computer Trivia &nbsp;</Link>
        <div class="nav-right">
        <Link to="/user-data">User Profile &nbsp;</Link>
        <button onClick={logout}>Log Out</button>
        </div>
        </nav>
        ) : (
        <nav class="topnavbar">
        <Link to="/">Home &nbsp;</Link>
        <Link to="/spiritual">Bible &nbsp;</Link>
        <Link to="/workouts">Workouts &nbsp;</Link>
        <Link to="/mentalExercise">Computer Trivia &nbsp;</Link>
        <div class="nav-right">
        <Link to="/signup">Signup &nbsp;</Link>
        <Link to="/login">Login &nbsp;</Link>
        <Link to="/users">Users &nbsp;</Link>
        </div>
      </nav>
        )}
      </header>

    </div>
    )
};


export default Navbar;