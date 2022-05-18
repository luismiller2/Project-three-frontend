import React from "react";
import { Link } from "react-router-dom";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = React.useState({});
  const [spirituals, setSpirituals] = React.useState([]);
  const [workouts, setWorkouts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    get("/users/user-data")
      .then((results) => setUser(results.data))
      .catch((err) => console.log(err.message));
    getTakeaways();
    getWorkouts();
  }, []);

  function deleteProfile() {
    post("/users/delete")
      .then((results) => {
        localStorage.clear();
        console.log("results.data.token", results.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  function getTakeaways() {
    get("/spiritual/my-spirituals")
      .then((results) => setSpirituals(results.data))
      .catch((err) => console.log(err.message));
  }

  function getWorkouts() {
    get("/workout/my-workouts")
      .then((results) => setWorkouts(results.data))
      .catch((err) => console.log(err.message));
  }

  console.log(spirituals);
  console.log(workouts);
  return (
    <div>
      <br></br>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email} </p>

      <h4>
        <Link to="/user-data/edit">
        <button> Edit </button>
        </Link>
      </h4>
      <button onClick={deleteProfile}>Delete Profile </button>
      <hr></hr>

      <br></br>
      <h3>My Workouts: </h3>
      {workouts.map(function (workout) {
        return (
          <div>
            <p>Name: {workout.name}</p>
            <p>Category: {workout.category?.name}</p>
            <p>Description: {workout.description}</p>
          </div>
        );
      })}

      <h3>Bible Takeaways: </h3>
      {spirituals.map(function (spiritual) {
        return (
          <div>
            <p>Book: {spiritual.book}</p>
            <p>Chapter: {spiritual.chapter}</p>
            <p>Verse From: {spiritual.verseFrom}</p>
            <p>Verse To: {spiritual.verseTo}</p>
            <p>Takeaway: {spiritual.takeaway}</p>
            <hr></hr>
          </div>
        );
      })}
      <h3>Quiz Results:</h3>
    </div>
  );
};

export default Profile;
