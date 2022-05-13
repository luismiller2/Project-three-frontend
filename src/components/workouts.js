import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Workout = () => {
  const [workouts, setWorkouts] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    getWorkout();
  }, []);

  React.useEffect(() => {
    axios
      .get(
        `https://wger.de/api/v2/exercise/?format=json&language=2/search?q=${query}`
      )
      .then((results) => console.log(results.data))
      .catch((err) => console.log(err.message));
  }, [query]);

  let getWorkout = () => {
    axios
      .get("https://wger.de/api/v2/exercise/?format=json&language=2")
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
              <Link to={`/${workout._id}`}>
                <h3>{workout.name}</h3>
              </Link>
              <p>{workout.type}</p>
              <p>{workout.duration}</p>
              <p>{workout.location}</p>
            </div>
          );
        })};

        <div class="footer-basic">
          <footer>
            <div class="social">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
            </div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Services</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p class="copyright">BetterMe © 2022</p>
          </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
  
};

export default Workout;
