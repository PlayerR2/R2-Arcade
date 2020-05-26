import { Modal, Button, Alert } from "react-bootstrap";
import React, { useState, createRef } from "react";
// import swal from "sweetalert";

export default function Login({ show, setShow }) {
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  const inputEl = createRef();
  const onClickHandler = () => {
    inputEl.current.click();
  };

  const onChangeHandler = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      uploadFile(event.target.files[i]);
    }
  };

  //   const uploadFile = (file) => {
  //     // TODO save files to user specific directory
  //     const storageRef = storage.ref("users/" + user.displayName);
  //     const uploadTask = storageRef.child(file.name).put(file); //<- uploads put()

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         console.log("SNAPSHOT -->", snapshot);
  //       },
  //       (err) => {
  //         console.log("ERROR -->", err);
  //       },
  //       () => {
  //         storageRef
  //           .child(file.name)
  //           .getDownloadURL()
  //           .then((fireBaseURL) => {
  //             setImageURL(fireBaseURL);
  //           });
  //       }
  //     );
  //   };

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>🚀 Upload your game</Modal.Title>
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
        <h4>Thank you for choosing R²♠rcade!</h4>
        <i>👍 Please follow this guide to upload your game.</i>
        <p></p>
        <h4>Game Requirements</h4>
        <p>
          ✅ It is a Unity WebGl game<br></br>✅ Not an adult game (no nudity,
          sexual explicity, violence)<br></br>✅ Does not contain hate or
          discriminatory content<br></br>✅ Must not contain any viruses
        </p>
        <p></p>
        <h4>Steps to uploading your game</h4>
        <ol>
          <li>Build your Unity game as WebGL</li>
          <li>
            Compress your file to a <i>.zip file</i>
          </li>
          <li>
            Upload your <i>.zip file</i>!
          </li>
        </ol>
        <p></p>
        <p>
          🎉 Once your upload has been confirmed, our staff of handpicked, fully
          qualified game gnomes will approve your game.
        </p>
        <p>
          🙏 This process can take up to 2~3 days. We will notice you via email
          once your game has been approved and hosted!
        </p>
        <p></p>
        <h5>🔥 We can't wait to play your games! 🔥</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            onClickHandler();
          }}
          block
        >
          🙌 Upload
        </Button>
        <input
          id="file-input"
          type="file"
          accept=".zip"
          ref={inputEl}
          onChange={(event) => onChangeHandler(event)}
          style={{ display: "none" }}
        />
      </Modal.Footer>
    </Modal>
  );
}
