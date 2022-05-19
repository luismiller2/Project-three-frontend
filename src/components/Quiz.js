import React from "react";


const Quiz = (props) => {

    const [displayMessage, setDisplayMessage] = React.useState('')
    const [question, setQuestion] = React.useState(props.trivia.question)
    const [correct_answer, setCorrectAnswer] = React.useState(props.trivia.correct_answer)
    const [answers, setAnswers] = React.useState([...props.trivia.incorrect_answers, props.trivia.correct_answer].sort(() => Math.random() - 0.5))

function guess(answer) {
    // console.log(answer)
    // console.log(correct_answer)

    if (answer === correct_answer) {
        setDisplayMessage("Correct!")
        // correct_answer.setBackgroundColor(Color.GREEN);
    } else {
        setDisplayMessage("Incorrect Answer!")
    }
}

const handleAnswerButtonClick = (answer) => {
    if (answer === correct_answer) {
        setDisplayMessage("Correct!")
    } else {
        setDisplayMessage("Incorrect Answer!")
    }
}


return (
    <div>

          <p>{question.replace(/&quot;/g,'"').replace(/&#039;/g,'').replace(/&gt;/g, ">").replace(/&lt;/g, "<")}</p>
         
          {answers.map(function (answer) {
              return (
                  <div><button onClick={() =>guess(answer)}>{answer.replace(/&quot;/g,'"').replace(/&#039;/g,'').replace(/&gt;/g, ">").replace(/&lt;/g, "<")}</button></div>
              )
          })}
          <p>{displayMessage}</p>
    </div>
     );
    };

export default Quiz;

