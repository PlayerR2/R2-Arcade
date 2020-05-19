import { Modal, Button } from "react-bootstrap";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContentBally = new UnityContent(
  "original/Build/original.json",
  "original/Build/UnityLoader.js"
);

const unityContentEatNGrow = new UnityContent(
  "eatNgrow/Build/build.json",
  "eatNgrow/Build/UnityLoader.js"
);


export default function GameScreen(props) {
  return (
    <Modal {...props} size="xl" centered dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          GAME TITLE HERE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>👇GAME RENDERED HERE👇
        <Unity unityContent={unityContentBally} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
