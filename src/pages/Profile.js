import React from "react";
import { Link } from "react-router-dom";
import {get} from "../authService/authService";

const Profile = () => {

    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        get('/users/user-data')
          .then((results) =>  setUser(results.data))
          .catch((err) => console.log(err.message));
      }, []);

    console.log(user)
    return(
        <div>
        <br></br>
        <h2>User Profile</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email} </p>
        <h4><Link to="/user-data/edit"> Edit</Link></h4>
        <button>Delete Profile </button>
        <hr></hr>
        
        <br></br>
        <h3>My Workouts: </h3>
        <h3>Bible Passages Read:</h3>
        <h3>Quiz Results:</h3>
        </div>
    )
}

export default Profile;