import { Link } from "react-router-dom";
import Unity, { UnityContent } from "react-unity-webgl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { storage } from "../firebase";

export default function GameScreen(props) {
  const unity = new UnityContent(
    `${props.location.gameName.name}/Build/${props.location.gameName.name}.json`,
    `${props.location.gameName.name}/Build/UnityLoader.js`
  );

  const unity2 = new UnityContent(
    `${storageRef.child("eatNgrow.json")}`,
    `${storageRef.child("UnityLoader.js")}`
  );

  return (
    <>
      <div className="header">
        <h1 className="title">{props.location.gameName.name}</h1>
      </div>
      <div className="gamescreen-header">
        <div className="return">
          <Link to="/">
            <FontAwesomeIcon className="return-btn" icon={faArrowCircleLeft} />
            return
          </Link>
        </div>
        <h3 className="gamescreen-title">Made with ♥️　by USER</h3>
        <div className="void"></div>
      </div>
      <Unity unityContent={unity} />
    </>
  );
}
