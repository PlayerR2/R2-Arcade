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
<<<<<<< HEAD
=======
  const gamesDb = firestore.collection("games").doc();
  const userDb = firestore.collection("users").doc(user.uid);
  // let uploadedFiles = userDb.where("files","==", true ).get()
  //   .then(snapshot => snapshot.foreach(file => file))
>>>>>>> bc524343bba2b5efcf1defd476bf70e4f2912a06

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
          <Link to="/">
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
<<<<<<< HEAD
      <Upload show={show} setShow={setShow} user={user} />
=======
      <Upload show={show} setShow={setShow} user={user}/>
      <div>
        <h3>Files you've uploaded:</h3>
        <ul>
          <li></li>
        </ul>
      </div>
>>>>>>> bc524343bba2b5efcf1defd476bf70e4f2912a06
    </>
  );
}
