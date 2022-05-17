import React from "react";
import {post} from "../authService/authService";
import { useNavigate } from "react-router-dom";


const EditProfile = () =>{

    const [updateUsername, setUpdateUsername] = React.useState('')
    const [updateEmail, setUpdateEmail] = React.useState('')
    const navigate = useNavigate();

    function checkUpdateFields(e) {
        e.preventDefault()

        post('/users/user-data', {
            username: updateUsername,
            email: updateEmail,
        })
        .then((results) => {
            localStorage.setItem("authToken", results.data.token);
            navigate("/users/user-data");
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
            <input onChange={(e) => setUpdateUsername(e.target.value)}
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