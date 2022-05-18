import React from "react";
import {get, post} from "../authService/authService";
import { useNavigate, useParams } from "react-router-dom";

const EditWorkout = () =>{

    const [updateName, setUpdateName] = React.useState('')
    const [updateCategory, setUpdateCategory] = React.useState('')
    const [updateDescription, setUpdateDescription] = React.useState('')
    const [ sets, setSets ] = React.useState('')
    const [ user, setUser ] = React.useState('')
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect(() => {
        get('/workout/my-workouts')
          .then((results) =>  setUser(results.data))
          .catch((err) => console.log(err.message));
      }, []);

      console.log("this is user", user)

      function checkUpdateFields(e) {
        e.preventDefault()

        post(`/workout/${params.id}/edit`, {
            name: updateName,
            category: updateCategory,
            description: updateDescription,
            sets: sets,
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
        <h1>Edit Workout</h1>
        <form onSubmit={checkUpdateFields}>
            <label>Name: </label>
            <input 
                onChange={(e) => setUpdateName(e.target.value)}
                name="name"
                value={updateName}
            />
            <label>Category: </label>
            <input 
                onChange={(e) => setUpdateCategory(e.target.value)}
                name="category"
                value={updateCategory}
            />
            <label>Description: </label>
            <input 
                onChange={(e) => setUpdateDescription(e.target.value)}
                name="description"
                value={updateDescription}
            />
            <label>Sets: </label>
            <input onChange={(e) => setSets(e.target.value)}
                name="sets"
                value={sets}/>
            <button type="submit">Edit</button>
        </form>
        </div>
    )
}

export default EditWorkout;