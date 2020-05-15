import { Navbar, Form, Button } from "react-bootstrap";
import React, { useState, useContext, createRef } from "react";
import Login from "./Login";
import Register from "./Register";
import { UserContext } from "./UserProvider";
import { auth, storage } from "../firebase";

export default function Navigation({ setImageURL }) {
  // Modal states
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

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
    // TODO save files to user specific directory
    const storageRef = storage.ref("games");
    const uploadTask = storageRef.child(file.name).put(file); //<- uploads put()

    uploadTask.on(
      "state_changed",
      (snapshot) => {
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

    // TEST: listing all files in "games" dir
    // storageRef
    //   .listAll()
    //   .then((res) => {
    //     res.prefixes.forEach((folderRef) => {
    //       console.log("folderRef -->", folderRef);
    //     });
    //     res.items.forEach((itemRef) => {
    //       console.log("itemRef -->", itemRef);
    //     });
    //   })
    //   .catch((error) => console.log("ERROR -->", error));
  };

  return (
    <Navbar bg="light" variant="light">
      {user ? (
        <>
          <Navbar.Brand href="#home">🎮 {user.displayName}</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Form inline>
              <Button
                variant="outline-primary mr-sm-2"
                onClick={() => {
                  auth.signOut();
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
          <Navbar.Brand href="#home">👾 Game Center</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Form inline>
              <Button
                variant="outline-primary mr-sm-2"
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
