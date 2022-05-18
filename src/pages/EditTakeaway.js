import React from "react";
import {get, post} from "../authService/authService";
import { useNavigate, useParams } from "react-router-dom";

const EditTakeaway = () =>{

    const [updateBook, setUpdateBook] = React.useState('')
    const [updateChapter, setUpdateChapter] = React.useState('')
    const [updateVerseFrom, setUpdateVerseFrom] = React.useState('')
    const [updateVerseTo, setUpdateVerseTo] = React.useState('')
    const [ takeaway, setTakeaway ] = React.useState('')
    const [ user, setUser ] = React.useState('')
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect(() => {
        get('/spiritual/my-spirituals')
          .then((results) =>  setUser(results.data))
          .catch((err) => console.log(err.message));
      }, []);

      console.log("this is user", user)

      function checkUpdateFields(e) {
        e.preventDefault()

        post(`/spiritual/${params.id}/edit`, {
            book: updateBook,
            chapter: updateChapter,
            verseFrom: updateVerseFrom,
            verseTo: updateVerseTo,
            takeaway: takeaway,
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
        <h1>Edit Takeaway</h1>
        <form onSubmit={checkUpdateFields}>
            <label>Book: </label>
            <input 
                onChange={(e) => setUpdateBook(e.target.value)}
                name="book"
                value={updateBook}
            />
            <label>Chapter: </label>
            <input 
                onChange={(e) => setUpdateChapter(e.target.value)}
                name="chapter"
                value={updateChapter}
            />
            <label>Verse From: </label>
            <input 
                onChange={(e) => setUpdateVerseFrom(e.target.value)}
                name="verseFrom"
                value={updateVerseFrom}
            />
            <label>Verse To: </label>
            <input 
                onChange={(e) => setUpdateVerseTo(e.target.value)}
                name="verseTo"
                value={updateVerseTo}
            />
            <label>Takeaway: </label>
            <input onChange={(e) => setTakeaway(e.target.value)}
                name="takeaway"
                value={takeaway}/>
            <button type="submit">Edit</button>
        </form>
        </div>
    )
}

export default EditTakeaway;