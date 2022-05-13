import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {get, post} from "../authService/authService"

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
          <label>Testament</label>
          <input value={testament} onChange={(e) =>setTestament(e.target.value)}/>
          <label>Book</label>
          <input value={book} onChange={(e) =>setBook(e.target.value)}/>
          <label>Chapter</label>
          <input value={chapter} onChange={(e) =>setChapter(e.target.value)}/>
          <label>Verse From</label>
          <input value={verseFrom} onChange={(e) =>setVerseFrom(e.target.value)}/>
          <label>Verse To</label>
          <input value={verseTo} onChange={(e) =>setVerseTo(e.target.value)}/>
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

        <div class="footer-basic">
          <footer>
            <div class="social">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
            </div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Services</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p class="copyright">BetterMe © 2022</p>
          </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Spiritual;
