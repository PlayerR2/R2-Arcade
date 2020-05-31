import "../styles/styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Game() {
  return (
    <>
      <div className="header">
        <h1 className="title">R²♠rcade</h1>
      </div>
      <h3 className="page-title">
        <FontAwesomeIcon icon={faCaretDown} className="caret-down-left" />
        choose a game
        <FontAwesomeIcon icon={faCaretDown} className="caret-down-right" />
      </h3>
      <div className="game-wrapper">
        <div className="game-container">
          <Link to={{ pathname: "/game", gameName: { name: "Bally" } }}>
            <div className="hvrbox">
              <img
                className="hvrbox-layer_bottom"
                src="/Bally/BallyImage.png"
                alt="game"
              />
              <div className="hvrbox-layer_top">
                <div className="hvrbox-text">Bally</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="game-container">
          <Link to={{ pathname: "/game", gameName: { name: "eatNgrow" } }}>
            <div className="hvrbox">
              <img
                className="hvrbox-layer_bottom"
                src="https://art.pixilart.com/4b680819d6447f3.gif"
                alt="game"
              />
              <div className="hvrbox-layer_top">
                <div className="hvrbox-text">eatNgrow</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="game-container">
          <Link to={{ pathname: "/game", gameName: { name: "" } }}>
            <div className="hvrbox">
              <img
                className="hvrbox-layer_bottom"
                src="https://art.pixilart.com/4b680819d6447f3.gif"
                alt="game"
              />
              <div className="hvrbox-layer_top">
                <div className="hvrbox-text">Game Title Goes Here</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="game-container">
          <Link to={{ pathname: "/game", gameName: { name: "" } }}>
            <div className="hvrbox">
              <img
                className="hvrbox-layer_bottom"
                src="https://art.pixilart.com/4b680819d6447f3.gif"
                alt="game"
              />
              <div className="hvrbox-layer_top">
                <div className="hvrbox-text">Game Title Goes Here</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
