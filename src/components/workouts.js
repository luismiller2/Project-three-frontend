import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExerciseDetails from "./exerciseDetails";
import Footer from "./Footer";

const Workout = () => {
  const [workouts, setWorkouts] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    getWorkout();
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://wger.de/api/v2/exercise/?format=json&language=2`)
      .then((results) => console.log(results.data.results))
      .catch((err) => console.log(err.message));
  }, [query]);

  let getWorkout = () => {
    axios
      .get("https://wger.de/api/v2/exercise/?format=json&language=2&limit=250")
      .then((results) => setWorkouts(results.data.results))
      .catch((err) => console.log(err.message));
  };

  let handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
        <h1>Get a workout</h1>
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            value={query}
          ></input>
        </form>

        {workouts.map(function (workout) {
          return (
            <div>
              <Link to={`/workouts/${workout.id}`}>
                <h3>{workout.name}</h3>
              </Link>
             <p>{workout.description.replace(/<[^>]*>/g, '')}</p>
            </div>
          );
        })}
        {/* <div><Footer /></div> */}
        </div>
  );
  
};

export default Workout;
