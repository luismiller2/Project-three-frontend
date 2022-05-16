import React from "react";
import { get } from "../authService/authService";
import Footer from "../components/Footer";


const Home = () => {
    React.useEffect(() =>{
        let token = localStorage.getItem("authToken");
        console.log("This is the token", token)
        get('/users/login-test')
            .then((results) =>{
                console.log("Are we logged in?", results.data);
            })
            .catch((err) =>{
                console.log(err.message);
            })
    }, []);

    return (
      <div>
      <br></br>
          <h1>Welcome to BetterMe</h1>
          <br></br>
          <h5>Begin the journey of bettering yourself daily today!</h5>
          <ul>
              <li>Get daily workouts or create your own</li>
              <li>Read the Bible daily and write down your takeaways</li>
              <li>Get daily computer programming trivia and test your knowledge</li>
          </ul>

        <div><Footer /></div>
      </div>
    );
  };
  
  export default Home;
  