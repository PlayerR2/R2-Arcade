import { Navbar, Form, Button, ProgressBar } from "react-bootstrap";
import React, { useState, useContext, createRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { UserContext } from "./UserProvider";
import { auth, storage } from "../firebase";
import swal from "sweetalert";

export default function Navigation({ setImageURL }) {
  // Modal states
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [progressNow, setProgress] = useState(0);

  const { user } = useContext(UserContext);

  const inputEl = createRef();

  const onClickHandler = () => {
    inputEl.current.click();
  };

  const onChangeHandler = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      uploadFile(event.target.files[i]);
    }
  };

  const uploadFile = (file) => {
    const storageRef = storage.ref("users/" + user.displayName);
    const uploadTask = storageRef.child(file.name).put(file); //<- uploads put()

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(100.0 * (snapshot.bytesTransferred) / snapshot.totalBytes);
        console.log("SNAPSHOT -->", snapshot);
      },
      (err) => {
        console.log("ERROR -->", err);
      },
      () => {
        storageRef
          .child(file.name)
          .getDownloadURL()
          .then((fireBaseURL) => {
            setImageURL(fireBaseURL);
          });
      }
    );
  };

  return (
    <Navbar className="navbar">
      {user ? (
        <>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              🎮 {user.displayName}
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <ProgressBar animated min={0} max={100} width={100}
            now={progressNow}
            label={`${progressNow}%`}
          />
            <Form inline>
              <Button
                variant="outline-light mr-sm-2"
                onClick={() => {
                  auth.signOut();
                  swal({
                    title: "👋 See you soon!",
                    text: "Hope you had a blast",
                    icon: "success",
                    button: "👋Goodbye",
                  });
                }}
              >
                Logout
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  onClickHandler();
                }}
              >
                Upload
              </Button>
              <input
                id="file-input"
                type="file"
                ref={inputEl}
                onChange={(event) => onChangeHandler(event)}
                style={{ display: "none" }}
                multiple="multiple"
              />
            </Form>
          </Navbar.Collapse>
        </>
      ) : (
        <>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              GAME CENTER
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Form inline>
              <Button
                variant="outline-light mr-sm-2"
                onClick={() => {
                  setLoginShow(true);
                }}
              >
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setRegisterShow(true);
                }}
              >
                Register
              </Button>
            </Form>
          </Navbar.Collapse>
        </>
      )}
      <Login loginShow={loginShow} setLoginShow={setLoginShow} />
      <Register registerShow={registerShow} setRegisterShow={setRegisterShow} />
    </Navbar>
  );
}
