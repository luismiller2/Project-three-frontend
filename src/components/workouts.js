import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const [workouts, setWorkouts] = React.useState([]);
  const [createdWorkout, setCreatedWorkout] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const [sets, setSets] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getWorkout();
  }, []);

  let getWorkout = () => {
    axios
      .get("https://wger.de/api/v2/exercise/?format=json&language=2&limit=250")
      .then((results) => setWorkouts(results.data.results))
      .catch((err) => console.log(err.message));
  };

  function customWorkout() {
    post("/workout/create", {
      name: name,
      category: category,
      description: description,
      sets: sets,
    })
    .then((results) => {
      console.log("Results", results.data);
      setCreatedWorkout(results.data);
      navigate("/user-data")
    })
    .catch((err) => {
      console.log("Something went wrong", err.message);
    });
  }

  return (
    <div>
        <br></br>
        <div class="createWorkoutSection">
        <h1>Create your own</h1>
        <div>
            <label>Name: &nbsp; </label>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Muscle Group: &nbsp; </label>
            <input value={category} onChange={(e) => setCategory(e.target.value)}/>
            <label>Description: &nbsp; </label>
            <input value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Sets: &nbsp; </label>
            <input value={sets} onChange={(e) => setSets(e.target.value)}/>
            <button onClick={customWorkout}>Create Workout</button>
        </div>
        <br></br>
        </div>
    <div>
        <h1>Get a workout</h1>
        <hr></hr>

        {workouts.map(function (workout) {
          return (
            <div>
            <ul>
              <Link to={`/workouts/${workout.id}`}>
               <li> <h4>{workout.name}</h4> </li>
              </Link>
            </ul>
            </div>
          );
        })}

        </div>
        <br></br>
        <div><Footer /></div>
        </div>
  );
  
};

export default Workout;
