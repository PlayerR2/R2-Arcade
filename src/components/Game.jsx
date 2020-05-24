import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

export default function Game() {
  return (
    <>
      <h3 className="page-title">👇 choose a game 👇</h3>
      <div className="game-wrapper">
        <div className="game-container">
          <Link to="/game">
            <img
              className="game-img"
              src="https://art.pixilart.com/4b680819d6447f3.gif"
              alt="game"
            />
          </Link>
          <h3 className="game-title">Bally</h3>
        </div>
        <div className="game-container">
          <img
            className="game-img"
            src="https://art.pixilart.com/4b680819d6447f3.gif"
            alt="game"
          />
          <h3 className="game-title">Game Title</h3>
        </div>
        <div className="game-container">
          <img
            className="game-img"
            src="https://art.pixilart.com/4b680819d6447f3.gif"
            alt="game"
          />
          <h3 className="game-title">Game Title</h3>
        </div>
        <div className="game-container">
          <img
            className="game-img"
            src="https://art.pixilart.com/4b680819d6447f3.gif"
            alt="game"
          />
          <h3 className="game-title">Game Title</h3>
        </div>
      </div>
    </>
  );
}
