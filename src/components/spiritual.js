import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {get, post} from "../authService/authService"
import Footer from "./Footer";

const Spiritual = () => {
  const [spirituals, setSpirituals] = React.useState([]);
  const [singleSpiritual, setSingleSpiritual] = React.useState('');
  const [testament, setTestament] = React.useState('');
  const [book, setBook] = React.useState('');
  const [chapter, setChapter] = React.useState('');
  const [verseFrom, setVerseFrom] = React.useState('');
  const [verseTo, setVerseTo] = React.useState('');
  const [bibleSearch, setBibleSearch] = React.useState({});
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    getSpiritual();
  }, []);

  React.useEffect(() => {
    get('/spiritual/single-spiritual')
      .then((results) => setSingleSpiritual(results.data))
      .catch((err) => console.log(err.message));
  }, [query]);

  let getSpiritual = () => {
    axios
      .get("spiritual/create")
      .then((results) => setSpirituals(results.data.results))
      .catch((err) => console.log(err.message));
  };

  const createBible = (e) => {
    e.preventDefault();
    post('/spiritual',{
      testament: testament,
      book: book,
      chapter: chapter,
      verseFrom: verseFrom,
      verseTo: verseTo,
    })
    .then((results) =>{
      console.log("Results", results.data); 
      setBibleSearch(results.data)
    })
      .catch((err)=> {
        console.log('Something went wrong', err.message)
    })
  }


  return (
    <div>
        <h1>Read the Bible</h1>
        <h3>Search for a passage</h3>
        <form onSubmit={createBible}>
          <div>
          <label>Book &nbsp;</label>
          <input value={book} onChange={(e) =>setBook(e.target.value)}/>
          </div>
          <div>
          <label>Chapter &nbsp;</label>
          <input value={chapter} onChange={(e) =>setChapter(e.target.value)}/>
          </div>
          <div>
          <label>Verse From &nbsp;</label>
          <input value={verseFrom} onChange={(e) =>setVerseFrom(e.target.value)}/>
          </div>
          <div>
          <label>Verse To &nbsp;</label>
          <input value={verseTo} onChange={(e) =>setVerseTo(e.target.value)}/>
          </div>
          <button type="submit">Create </button>
        </form>
       
        <div>
          <p>Book: {bibleSearch.Book}</p>
          <p>Chapter: {bibleSearch.Chapter}</p>
          <p>Verse From: {bibleSearch.VerseFrom}</p>
          <p>Verse To: {bibleSearch.VerseTo}</p>
          <p>{bibleSearch.Output}</p>
        </div>
        {spirituals.map(function (spiritual) {
          return (
            <div>
              <Link to={`/${spiritual._id}`}>
                <h3>{spiritual.book}</h3>
              </Link>
              <p>{spiritual.chapter}</p>
              <p>{spiritual.verses}</p>
              <p>{spiritual.takeaway}</p>
            </div>
          );
        })}

        {/* <div><Footer /></div> */}
       </div>
  );
};

export default Spiritual;
