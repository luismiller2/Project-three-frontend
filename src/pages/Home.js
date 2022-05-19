import React from "react";
import { get } from "../authService/authService";
import Footer from "../components/Footer";
import QuizExample from "../components/QuizExample";

const Home = () => {
  React.useEffect(() => {
    let token = localStorage.getItem("authToken");
    console.log("This is the token", token);
    get("/users/login-test")
      .then((results) => {
        console.log("Are we logged in?", results.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <br></br>
      <h1>Welcome to BetterMe</h1>
      <hr></hr>
      <div className="intro">
      <div className= "introSectionHeader">
      <h3>Begin the journey of bettering yourself daily today!</h3>
      </div>
      <div className="introSection">
      <ul>
        <li>Read the Bible daily and write down your takeaways</li>
        <li>Get daily workouts or create your own</li>
        <li>Get daily computer programming trivia and test your knowledge</li>
      </ul>
      </div>
      </div>
      <br></br>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <table>
          <tr>
            <th>My Improvement</th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td>Workout</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
          <tr>
            <td>Read Bible</td>
            <td><i class="fa fa-remove"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-remove"></i></td>
          </tr>
          <tr>
            <td>Improve Coding</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
          </tr>
        </table>
      </div>

         {/* <hr></hr>
      <h3>Begin the journey of bettering yourself daily today!</h3>
      <ul>
        <li>Read the Bible daily and write down your takeaways</li>
        <li>Get daily workouts or create your own</li>
        <li>Get daily computer programming trivia and test your knowledge</li>
      </ul>
      <br></br> */}

      <div>
        <br></br>
        <h4>Hear Steve Job's take on Continuous Improvement below:</h4>
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/Wc6bI16xuko"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br></br>
      </div>

      <br></br>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
