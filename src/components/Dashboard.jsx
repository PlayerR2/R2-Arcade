import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./UserProvider";
import { firestore } from "../firebase";

import Upload from "./Upload";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  //const userFileDb = firestore.collection("users").doc().collection("files").doc();
  const gamesDb = firestore.collection("games");
  let query = gamesDb.where('creatorId', '==', user.uid).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  // const showFiles = () => {
  //   let query = gamesRef.where("creatorId, "==", user.)
  // }

  const onClickHandler = () => {
    setShow(true);
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Dashboard</h1>
      </div>
      <div className="gamescreen-header">
        <div className="return">
          <Link to="/" className="to-arcade">
            <FontAwesomeIcon className="return-btn" icon={faArrowCircleLeft} />
            To Arcade
          </Link>
        </div>
        <h3 className="page-title">Let the world play your games!</h3>
        <div className="void"></div>
      </div>
      <div className="upload">
        <Button
          size="lg"
          variant="success"
          onClick={() => {
            onClickHandler();
          }}
        >
          Host my game!
        </Button>
      </div>
      <Upload show={show} setShow={setShow} user={user} />
      <div className="dashboard-file-list">
        <h3>Files you've uploaded:</h3>
        {/* <ul>
          {user.files.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}
