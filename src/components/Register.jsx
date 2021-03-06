import { Modal, Col, Row, Form, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, generateUserDocument, signInWithGoogle } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";

export default function Register({ registerShow, setRegisterShow }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
      setRegisterShow(false);
      swal("🎉 Welcome onboard!", "Enjoy your time at R²Arcade", "success");
      history.push("/dashboard");
    } catch (error) {
      setError("Error Signing up with email and password!");
      setShowError(true);
    }

    // Reset states
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <Modal show={registerShow} onHide={() => setRegisterShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>🙌 Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert
          show={showError}
          variant="danger"
          onClose={() => setShowError(false)}
          dismissible
        >
          <p>{error}</p>
        </Alert>
        <Form>
          <Form.Group as={Row} controlId="formGroupDisplayName">
            <Form.Label column sm="1">
              🎮
            </Form.Label>
            <Col sm>
              <Form.Control
                type="displayName"
                name="displayName"
                value={displayName}
                placeholder="Your username"
                onChange={(event) => onChangeHandler(event)}
              />
            </Col>
          </Form.Group>
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
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
          block
        >
          💾 Register 💾
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            try {
              signInWithGoogle();
              setRegisterShow(false);
              swal(
                "🎉 Welcome onboard!",
                "Enjoy your time at R²Arcade",
                "success"
              );
              history.push("/dashboard");
            } catch (error) {
              setError("Error registering with Google");
              setShowError(true);
            }
          }}
          block
        >
          <FontAwesomeIcon icon={faGoogle} /> Register with Google
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
