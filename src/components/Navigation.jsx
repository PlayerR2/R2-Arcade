
import { Navbar, Form, Button } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import swal from "sweetalert";
import { auth } from "../firebase";
import { UserContext } from "./UserProvider";

export default function Navigation() {
  // Modal states
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const { user } = useContext(UserContext);

  // var listRef = storage.storageRef.child('files/uid')
  // listRef.listAll().then(function(res) {
  //   res.prefixes.forEach(function(folderRef) {
  //     // All the prefixes under listRef.
  //     // You may call listAll() recursively on them.
  //     console.log("folderref---------->", folderRef);
  //   });
  //   res.items.forEach(function(itemRef) {
  //     console.log("itemref----->", itemRef)
  //     // All the items under listRef.
  //   });
  // }).catch(function(error) {
  //   // Uh-oh, an error occurred!
  // });
  
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
              <Form inline>
                <Button
                  variant="outline-light mr-sm-2"
                  onClick={() => {
                    auth.signOut();
                    swal({
                      title: "👋 See you soon!",
                      text: "Hope you had a blast",
                      icon: "success",
                      button: "👋 Goodbye",
                    });
                  }}
                >
                  Logout
                </Button>
                <Link to="/dashboard">
                  <Button variant="light">Dashboard</Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">
                R²♠rcade
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
        <Register
          registerShow={registerShow}
          setRegisterShow={setRegisterShow}
        />
      </Navbar>
    );
}
