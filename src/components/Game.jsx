import React, { useState } from "react";
import "../styles/styles.css";
import GameScreen from "./GameScreen";

export default function Game({ imageURL }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="game-wrapper">
      <div className="game-container">
        <img onClick={() => setModalShow(true)} src="https://art.pixilart.com/4b680819d6447f3.gif" alt="game" />
        <GameScreen show={modalShow} onHide={() => setModalShow(false)} />
        <h3 className="game-title">Bally</h3>
      </div>
      <div className="game-container">
        <img src="https://art.pixilart.com/4b680819d6447f3.gif" alt="game" />
        {/* <GameScreen show={modalShow} onHide={() => setModalShow(false)} /> */}
        <h3 className="game-title">Eat'n'Grow</h3>
      </div>
      <div className="game-container">
        <img src="https://art.pixilart.com/4b680819d6447f3.gif" alt="game" />
        <h3 className="game-title">Game Title</h3>
      </div>
      <div className="game-container">
        <img src="https://art.pixilart.com/4b680819d6447f3.gif" alt="game" />
        <h3 className="game-title">Game Title</h3>
      </div>
    </div>
  );
}
