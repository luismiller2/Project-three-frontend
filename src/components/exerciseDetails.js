import React from "react";
import { get, post } from "../authService/authService";
import { useNavigate, useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const [exercise, setExercise] = React.useState({});
  const [singleExercise, setSingleExercise] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(params);
    get(`/workout/singleWorkout/${params.id}`)
      .then((results) => setExercise(results.data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(exercise);

  function addToProfile() {
    post("/workout/create", {
      name: exercise.name,
      category: exercise.category?.name,
      description: exercise.description,
      sets: singleExercise,
    })
      .then((results) => {
        console.log("Results", results.data);
        setSingleExercise(results.data);
        navigate("/user-data")
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  return (
    <div>
      <br></br>
      <h1>Workout Details</h1>
      <p>
        <h2>{exercise.name}</h2>
      </p>
      <p>Muscle Group: {exercise.category?.name}</p>
      <p>Description: {exercise.description?.replace(/<[^>]*>/g, "")}</p>
      <label>Sets: </label>
      <input
        onChange={(e) => setSingleExercise(e.target.value)}
        type="text"
        name="search"
        value={singleExercise}
      ></input>
      <button onClick={addToProfile}>Add to My Workouts</button>
    </div>
  );
};

export default ExerciseDetails;
