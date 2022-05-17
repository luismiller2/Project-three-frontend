import React from "react";
import { get } from "../authService/authService";
import { useParams } from "react-router-dom";
import Workout from "./workouts";

const ExerciseDetails = () => {

    const [exercise, setExercise] = React.useState({});
    const [singleExercise, setSingleExercise] = React.useState('');
    const params = useParams()

    // React.useEffect(() => {
    //     getExercise();
    //   }, []);


    React.useEffect(() => {
        console.log(params)
        get(`/workout/singleWorkout/${params.id}`)
          .then((results) => setExercise(results.data))
          .catch((err) => console.log(err.message));
      }, []);
      console.log(exercise)
      
    //   let getExercise = () => {
    //     axios
    //       .get("workout/create")
    //       .then((results) => setExercise(results.data.results))
    //       .catch((err) => console.log(err.message));
    //   };
      
    return(
        <div>
        <br></br>
            <h1>Workout Details</h1>
            <p><h2>{exercise.name}</h2></p>
            <p>Muscle Group: {exercise.category?.name}</p>
            <p>Description: {exercise.description?.replace(/<[^>]*>/g, '')}</p>
            <button>Add to My Workouts</button>
        </div>
    )
}

export default ExerciseDetails;