import "../styles/styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Game() {

  return (
    <>
      <h3 className="page-title">
        <FontAwesomeIcon icon={faCaretDown} className="caret-down-left" />
        choose a game {1+2}
        <FontAwesomeIcon icon={faCaretDown} className="caret-down-right" />
      </h3>
      <div className="game-wrapper">
        <div className="game-container">
          <Link to={{pathname:"/game", query: "bally"}}>
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
          <Link to="/game">
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
          <Link to="/game">
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
          <Link to="/game">
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
