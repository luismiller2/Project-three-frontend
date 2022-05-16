import React from "react";
import { post } from "../authService/authService";

const WorkoutImage = () => {

    const [name, setName] = React.useState('')
    const [type, setType] = React.useState('')
    const [image, setImage] = React.useState('')


    function handleFileUpload(e){

        const uploadData = new FormData()

        uploadData.append("images", e.target.files[0])

        post("", uploadData)
            .then((results)=> {
                console.log("This is the image path", results.data)
                setImage(results.data)
            })
            .catch((err) => {
                console.log("Error", err.message)
            })
    }

    function create(e){
        e.preventDefault()

        post("/workout-image", {
            image: image,
        })
        .then((results) => {
            console.log("Success", results.data)
        })
        .catch((err) => {
            console.log("Error", err.message)
        })
    }

    return(
        <div>
            <h2>Workout Image</h2>
            <form onSubmit={create}>
                <label>Workout Image</label>
                <input type="file" onChange={e=>handleFileUpload(e)}/>
                <button type="submit">Workout Image Add</button>
            </form>
        </div>
    )
}

export default WorkoutImage;