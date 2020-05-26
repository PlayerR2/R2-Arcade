import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Upload from "./Upload";

export default function Dashboard() {
  const [show, setShow] = useState(false);

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
      <Upload show={show} setShow={setShow} />
    </>
  );
}
