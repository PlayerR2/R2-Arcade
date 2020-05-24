import { Link } from "react-router-dom";
import Unity, { UnityContent } from "react-unity-webgl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GameScreen({props}) {
  
  console.log("props------->", {props});
  //const game = props.game

  const bally = new UnityContent(
    `Bally/Build/Bally.json`,
    `Bally/Build/UnityLoader.js`
  );
  
  const eatNgrow = new UnityContent(
    `eatNgrow/Build/eatNgrow.json`,
    `eatNgrow/Build/UnityLoader.js`
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
      <Unity unityContent={eatNgrow} />
    </>
  );
}
