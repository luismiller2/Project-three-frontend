import React from "react";
import { Link } from "react-router-dom";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Profile = () => {
  const [user, setUser] = React.useState({});
  const [spirituals, setSpirituals] = React.useState([]);
  const [workouts, setWorkouts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
      console.log("GET USER DATA")
    get("/users/user-data")
      .then((results) => setUser(results.data))
      .catch((err) => console.log(err.message));
    getTakeaways();
    getWorkouts();
  }

  function getTakeaways() {
      console.log("GET TAKEAWAYS")
    get("/spiritual/my-spirituals")
      .then((results) => setSpirituals(results.data))
      .catch((err) => console.log(err.message));
  }

  function getWorkouts() {
      console.log("GET WORKOUT")
    get("/workout/my-workouts")
      .then((results) => setWorkouts(results.data))
      .catch((err) => console.log(err.message));
  }

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

  function deleteWorkout(id) {
    console.log(id);
    post(`/workout/${id}/delete`)
      .then((results) => {
        getUserData();
        console.log("results.data.token", results.data.token);
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  function deleteTakeaway(takeawayID) {
    console.log(takeawayID);
    console.log("takawayID", `/spiritual/${takeawayID}/delete`);
    post('/spiritual/'+takeawayID+'/delete')
      .then((results) => {
          console.log("results.data.token", results.data.token);
          getUserData();
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  console.log(spirituals);
  console.log(workouts);
  return (
    <div>
      <br></br>
      <h1>User Profile</h1>
      <hr></hr>
      <div className="userProfile">
      <p>Username: {user.username}</p>
      <p>Email: {user.email} </p>

        <Link to="/user-data/edit">
          <button> Edit </button>
        </Link>
    
      <button onClick={deleteProfile}>Delete Profile </button>
      </div>

      <br></br>
      <h2>{user.username}'s Workouts: </h2>
      <div className="columnatedW">
      {workouts.map(function (workout) {
        return (
          <div class="box">
            <p>Name: {workout.name}</p>
            <p>Muscle Group: {workout.category}</p>
            <p>Description: {workout.description?.replace(/<[^>]*>/g, "")}</p>
            <p>Sets: {workout.sets}</p>
            <Link to={`/workout/${workout._id}/edit`}>
          <button> Edit </button>
            </Link>
            <button onClick={() => deleteWorkout(workout._id)}>
              Delete Workout{" "}
            </button>
            {/* <hr></hr> */}
          </div>
        );
      })}
          </div>

      <br></br>
      <h2>{user.username}'s Bible Takeaways: </h2>
      <div className="columnatedT">
      {spirituals.map(function (spiritual) {
        return (
          <div class="box">
            <p>Book: {spiritual.book}</p>
            <p>Chapter: {spiritual.chapter}</p>
            <p>Verse From: {spiritual.verseFrom}</p>
            <p>Verse To: {spiritual.verseTo}</p>
            <p>Takeaway: {spiritual.takeaway}</p>
            <Link to={`/spiritual/${spiritual._id}/edit`}>
          <button> Edit </button>
            </Link>
            <button onClick={() => deleteTakeaway(spiritual._id)}>
              Delete Takeaway{" "}
            </button>
            {/* <hr></hr> */}
          </div>
        );
      })}
      </div>
      <br></br>
      {/* <h3>Quiz Results:</h3> */}

      <br></br>
      <div><Footer /></div>
    </div>
  );
};

export default Profile;
