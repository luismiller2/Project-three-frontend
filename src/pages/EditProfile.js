import React from "react";
import {get, post} from "../authService/authService";
import { useNavigate } from "react-router-dom";


const EditProfile = () =>{

    const [updateUsername, setUpdateUsername] = React.useState('')
    const [updateEmail, setUpdateEmail] = React.useState('')
    const [ user, setUser ] = React.useState('')
    const navigate = useNavigate();

    // let token = localStorage.getItem("authToken")

    React.useEffect(() => {
        get('/users/user-data')
          .then((results) =>  setUser(results.data))
          .catch((err) => console.log(err.message));
      }, []);

      console.log("this is user", user)

    function checkUpdateFields(e) {
        e.preventDefault()

        post('/users/edit', {
            username: updateUsername,
            email: updateEmail,
        })
        .then((results) => {
            // localStorage.setItem("authToken", results.data.token);
            console.log("results.data.token", results.data.token)
            navigate("/user-data");
        })
        .catch((err) => {
            console.log("Something went wrong", err.message)
        })
    }

    return(
        <div>
        <br></br>
        <h1>Update Profile</h1>
        <form onSubmit={checkUpdateFields}>
            <label>Username: </label>
            <input 
                onChange={(e) => setUpdateUsername(e.target.value)}
                name="username"
                value={updateUsername}
            />
            <label>Email: </label>
            <input onChange={(e) => setUpdateEmail(e.target.value)}
                name="email"
                value={updateEmail}/>
            <button type="submit">Edit</button>
        </form>
        </div>
    )
}

export default EditProfile;