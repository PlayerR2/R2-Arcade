import { Link } from "react-router-dom";
import Unity, { UnityContent } from "react-unity-webgl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GameScreen(props) {

  const unity = new UnityContent(
    `${props.location.gameName.name}/Build/${props.location.gameName.name}.json`,
    `${props.location.gameName.name}/Build/UnityLoader.js`
  );

  return (
    <>
      <div className="gamescreen-header">
        <div className="return">
          <Link to="/">
            <FontAwesomeIcon className="return-btn" icon={faArrowCircleLeft} />
            return
          </Link>
        </div>
        <h3 className="gamescreen-title">Game Title Goes Here</h3>
        <div className="void"></div>
      </div>
      <Unity unityContent={unity} />
    </>
  );
}
