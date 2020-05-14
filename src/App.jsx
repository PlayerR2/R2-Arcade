import React from "react";
import Game from "./components/Game";
import "../src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Unity, { UnityContent } from "react-unity-webgl";
import Navigation from "./components/Navigation";

export default function App() {
  const unityContent = new UnityContent(
    "Bally/Build/Bally.json",
    "Bally/Build/UnityLoader.js"
  );

  return (
    <>
      <Unity unityContent={unityContent} />
      <Navigation />
      <div className="header">
        <h1 className="title">GAME CENTER</h1>
        <h3 className="user-instruction">👇 choose a game 👇</h3>
      </div>
      <Game />

      <h3 className="footer">
        Made with ❤️ by{" "}
        <a href="https://github.com/PlayerR2/duo-cc12" target="_blank">
          PlayerR2
        </a>
      </h3>
    </>
  );
}
