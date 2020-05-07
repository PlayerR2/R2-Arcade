import React from "react";
import Game from "./components/Game";
import "../src/styles/styles.css";

export default function App() {
  return (
    <>
      <div className="header">
        <h1 className="title">GAME CENTER</h1>
        <h3 className="user-instruction">👇 choose a game 👇</h3>
      </div>
      <Game />
      <h3 className="footer">made with ❤️ by PlayerR2</h3>
    </>
  );
}
