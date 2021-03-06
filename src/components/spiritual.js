import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Modal from "./Modal";
import styles from "../Modal.css";
import { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Search Bible
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

const Spiritual = () => {
  const [spirituals, setSpirituals] = React.useState([]);
  const [singleSpiritual, setSingleSpiritual] = React.useState("");
  const [testament, setTestament] = React.useState("");
  const [book, setBook] = React.useState("");
  const [chapter, setChapter] = React.useState("");
  const [verseFrom, setVerseFrom] = React.useState("");
  const [verseTo, setVerseTo] = React.useState("");
  const [bibleSearch, setBibleSearch] = React.useState({});
  const [query, setQuery] = React.useState("");
  const [userTakeaway, setUserTakeaway] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    getSpiritual();
  }, []);

  React.useEffect(() => {
    get("/spiritual/single-spiritual")
      .then((results) => setSingleSpiritual(results.data))
      .catch((err) => console.log(err.message));
  }, [query]);

  let getSpiritual = () => {
    axios
      .get("spiritual/create")
      .then((results) => setSpirituals(results.data.results))
      .catch((err) => console.log(err.message));
  };

  const searchBible = (e) => {
    e.preventDefault();
    post("/spiritual", {
      testament: testament,
      book: book,
      chapter: chapter,
      verseFrom: verseFrom,
      verseTo: verseTo,
    })
      .then((results) => {
        console.log("Results", results.data);
        setBibleSearch(results.data);
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  };

  function addToProfile() {
    post("/spiritual/create", {
      book: bibleSearch.Book,
      chapter: bibleSearch.Chapter,
      verseFrom: bibleSearch.VerseFrom,
      verseTo: bibleSearch.VerseTo,
      takeaway: userTakeaway,
    })
      .then((results) => {
        console.log("Results", results.data);
        setBibleSearch(results.data);
        navigate("/user-data")
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }
  // let handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  return (
    <div>
      <br></br>
      <h1>Read the Bible</h1>
      <h3>Search for a passage</h3>
      <hr></hr>
      <form onSubmit={searchBible}>
        <div>
          <label>Book: &nbsp;</label>
          <input value={book} onChange={(e) => setBook(e.target.value)} />
        </div>
        <div>
          <label>Chapter: &nbsp;</label>
          <input value={chapter} onChange={(e) => setChapter(e.target.value)} />
        </div>
        <div>
          <label>Verse From: &nbsp;</label>
          <input
            value={verseFrom}
            onChange={(e) => setVerseFrom(e.target.value)}
          />
        </div>
        <div>
          <label>Verse To: &nbsp;</label>
          <input value={verseTo} onChange={(e) => setVerseTo(e.target.value)} />
        <button type="submit">Search Bible </button>
        </div>
      </form>
      {/* <Popup /> */}

      <hr></hr>
      <div className = "bibleOutput">
        <p>Book: {bibleSearch.Book}</p>
        <p>Chapter: {bibleSearch.Chapter}</p>
        <p>Verse From: {bibleSearch.VerseFrom}</p>
        <p>Verse To: {bibleSearch.VerseTo}</p>
        <p>{bibleSearch.Output}</p>

        <label>Takeaway: </label>
        <input  class="textbox"
          onChange={(e) => setUserTakeaway(e.target.value)}
          type="text"
          name="search"
          value={userTakeaway}
        ></input>

        <button onClick={addToProfile}>Add to My Profile</button>
      </div>

      <br></br>
      <div><Footer /></div>
    </div>
  );
};

export default Spiritual;
