import React, { useState } from "react";
import { Modal, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { auth } from "../firebase";
import swal from "sweetalert";

export default function PasswordReset({
  passwordResetShow,
  setPasswordResetShow,
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setPasswordResetShow(false);
        swal(
          "🚀 An email has been sent to you!",
          "Check you email and reset your password",
          "success"
        );
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <Modal show={passwordResetShow} onHide={() => setPasswordResetShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>🔑 Reset your Password</Modal.Title>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={(event) => {
            sendResetEmail(event);
          }}
          block
        >
          ✨ Send Reset Email ✨
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
