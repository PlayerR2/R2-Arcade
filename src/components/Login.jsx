import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";

export default function Login({ loginShow, setLoginShow }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <Modal show={loginShow} onHide={() => setLoginShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>👋 Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formGroupEmail">
            <Form.Label column sm="1">
              ✉️
            </Form.Label>
            <Col sm>
              <Form.Control
                type="email"
                name="userEmail"
                value={email}
                placeholder="Your email"
                onChange={(event) => onChangeHandler(event)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupPassword">
            <Form.Label column sm="1">
              🗝
            </Form.Label>
            <Col sm>
              <Form.Control
                type="password"
                name="userPassword"
                value={password}
                placeholder="Your password"
                onChange={(event) => onChangeHandler(event)}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={(event) => {
            signInWithEmailAndPasswordHandler(event, email, password);
            setLoginShow(false);
          }}
          block
        >
          🔥 Enter 🔥
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error logging in with Google", error);
            }
          }}
          block
        >
          <FontAwesomeIcon icon={faGoogle} /> Login with Google
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
