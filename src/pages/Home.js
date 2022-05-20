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
      <div class="row">
      <div className= "introSectionHeader">
      {/* <h2>Begin the journey of bettering yourself daily today!</h2> */}
      </div>
      <div className="introSection">
      <br></br>
      <div>
        {/* <div class="column"><div class="card"><p>Read the Bible daily and write down your takeaways</p></div></div> */}
        <div class="column"><div class="card"><p>READ THE BIBLE DAILY AND WRITE DOWN YOUR TAKEAWAYS</p><img src="https://res.cloudinary.com/luismiller/image/upload/v1652996599/bible_pic_koenas.png" width="100" height="100"></img></div></div>
        {/* <div class="column"><div class="card"><p>Get daily workouts or create your own</p></div></div> */}
        <div class="column"><div class="card"><p>GET DAILY WORKOUTS OR CREATE YOUR OWN</p><img src="https://res.cloudinary.com/luismiller/image/upload/v1652996599/workout_pic_xft7fv.png" width="100" height="100"></img></div></div>
        {/* <div class="column"><div class="card"><p>Get daily computer programming trivia and test your knowledge</p></div></div> */}
        <div class="column"><div class="card"><p>GET DAILY COMPUTER PROGRAMMING TRIVIA AND TEST YOUR KNOWLEDGE</p><img src="https://res.cloudinary.com/luismiller/image/upload/v1652996599/computer_vhjmdq.png" width="150" height="100"></img></div></div>
      </div>
      </div>
      </div>
      <br></br>
      {/* <h2>Begin the journey of bettering yourself daily today!</h2> */}

      <div class="video">
        <br></br>
        <h4>Hear Steve Job's take on Continuous Improvement below:</h4>
        <iframe width="100%" height="800" 
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
