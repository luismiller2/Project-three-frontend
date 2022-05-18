import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {get} from "../authService/authService"
import Footer from "./Footer";
import Quiz from "./Quiz";

const MentalExercise = () => {
  const [quiz, setQuiz] = React.useState([])

  // React.useEffect(() => {
  //   getMentalExercise();
  // }, []);

  React.useEffect(() => {
    get('/mentalExercise')
      .then((results) =>  setQuiz(results.data.results))
      .catch((err) => console.log(err.message));
  }, []);

  let getMentalExercise = () => {
    axios
      .get("mentalExercise/all-mental-exercises")
      .then((results) => setQuiz(results.data.results))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
    <br></br>
    <h1>Computer Programming Trivia</h1>
    <hr></hr>
        {quiz.length && quiz.map(function (trivia) {
          return (
            <Quiz trivia = {trivia}/>
        );
        })}

        <div><Footer /></div>
       </div>
  );
};

export default MentalExercise;
