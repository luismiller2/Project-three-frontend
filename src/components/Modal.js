import React from "react";
// import styles from "../App.css";
import styles from "../Modal.css"
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../authService/authService";


function Popup(spiritual) {


    return(
        <div>

        </div>
    )
}

const Modal = ({ setIsOpen }) => {

    const [book, setBook] = React.useState("");
    const [chapter, setChapter] = React.useState("");
    const [verseFrom, setVerseFrom] = React.useState("");
    const [verseTo, setVerseTo] = React.useState("");
    const [bibleSearch, setBibleSearch] = React.useState({});
    const [userTakeaway, setUserTakeaway] = React.useState("");
    const navigate = useNavigate();

    const searchBible = (e) => {
        e.preventDefault();
        post("/spiritual", {
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
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Bible Search Output</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
          {/* <p>{bibleSearch.Book}</p> */}
          {/* <p>{bibleSearch.Output}</p> */}
          <p>This is where my verses should go</p>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                onClick={addToProfile}>
                Add to My Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;