import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
        <br></br>
        <h1>Get a workout</h1>
        <hr></hr>
        {/* <form>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            value={query}
          ></input>
        </form> */}

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
        {/* <div><Footer /></div> */}
        </div>
  );
  
};

export default Workout;
