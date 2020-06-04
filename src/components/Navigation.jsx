import { Navbar, Form, Button } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import swal from "sweetalert";
import { auth } from "../firebase";
import { UserContext } from "./UserProvider";
import PasswordReset from "./PasswordReset";

export default function Navigation() {
  const { user } = useContext(UserContext);

  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [passwordResetShow, setPasswordResetShow] = useState(false);

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
      <Login
        loginShow={loginShow}
        setLoginShow={setLoginShow}
        setPasswordResetShow={setPasswordResetShow}
      />
      <Register registerShow={registerShow} setRegisterShow={setRegisterShow} />
      <PasswordReset
        passwordResetShow={passwordResetShow}
        setPasswordResetShow={setPasswordResetShow}
      />
    </Navbar>
  );
}
