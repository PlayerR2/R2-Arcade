import { Modal, Button } from "react-bootstrap";
import Iframe from "react-iframe";

export default function GameScreen(props) {
  return (
    <Modal {...props} size="lg" centered dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Game Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Iframe
          url="https://i.simmer.io/@finkagain/bally"
          width="900px"
          height="540px"
        ></Iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
