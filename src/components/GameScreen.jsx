import { Modal, Button } from "react-bootstrap";
import Unity, { UnityContent } from "react-unity-webgl";

export default function GameScreen(props) {
  const unityContentBally = new UnityContent(
    "original/Build/original.json",
    "original/Build/UnityLoader.js"
  );

  return (
    <Modal {...props} size="xl" centered dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          GAME TITLE HERE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Unity unityContent={unityContentBally} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
