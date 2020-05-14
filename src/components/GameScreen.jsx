import { Modal, Button } from "react-bootstrap";

export default function GameScreen(props) {
  return (
    <Modal {...props} size="lg" centered dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          GAME TITLE HERE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>GAME RENDERED HERE</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
