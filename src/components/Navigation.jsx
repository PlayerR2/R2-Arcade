import { Navbar, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Navigation() {
  // Modal states
  const [loginShow, setLoginShow] = React.useState(false);
  const [registerShow, setRegisterShow] = React.useState(false);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">👾Game Center</Navbar.Brand>
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
            {/* Show when user isLoggedIn */}
            {/* <Button
              variant="outline-primary mr-sm-2"
              onClick={() => {
                signout user;
              }}
            >
              Logout
            </Button>
            <Button
              variant="success"
              type="submit"
              onClick={() => { get file input;
              }}
            >
              Upload
            </Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Login loginShow={loginShow} setLoginShow={setLoginShow} />
      <Register registerShow={registerShow} setRegisterShow={setRegisterShow} />
    </>
  );
}
