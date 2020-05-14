import { Modal, Navbar, Form, Button, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

export default function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalType, setModalType] = React.useState("👋 Login");
  const [modalBtn, setModalBtn] = React.useState("🔥 Enter  🔥");

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">👾Game Center</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Button
              variant="outline-primary mr-sm-2"
              onClick={() => {
                setModalShow(true);
                setModalType("👋 Login");
                setModalBtn("🔥 Enter  🔥");
              }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setModalShow(true);
                setModalType("🙌 Register");
                setModalBtn("🔥 Enter  🔥");
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

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {modalType === "🙌 Register" && (
              <Form.Group as={Row} controlId="formGroupUsername">
                <Form.Label column sm="1">
                  🎮
                </Form.Label>
                <Col sm>
                  <Form.Control type="username" placeholder="Your username" />
                </Col>
              </Form.Group>
            )}
            <Form.Group as={Row} controlId="formGroupEmail">
              <Form.Label column sm="1">
                ✉️
              </Form.Label>
              <Col sm>
                <Form.Control type="email" placeholder="Your email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formGroupPassword">
              <Form.Label column sm="1">
                🗝
              </Form.Label>
              <Col sm>
                <Form.Control type="password" placeholder="Your password" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setModalShow(false)} block>
            {modalBtn}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
