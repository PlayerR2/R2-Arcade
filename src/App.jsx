import React, { useState } from "react";
import Game from "./components/Game";
import "../src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Unity, { UnityContent } from "react-unity-webgl";
import Navigation from "./components/Navigation";
import UserProvider from "./components/UserProvider";

export default function App() {
  //
  const unityContentBally = new UnityContent(
    "bally/Build/Bally.json",
    "bally/Build/UnityLoader.js"
  );

  const [imageURL, setImageURL] = useState("");

  return (
    <UserProvider>
      <Unity unityContent={unityContentBally} />
      <Navigation setImageURL={setImageURL} />
      <div className="header">
        <h1 className="title">GAME CENTER</h1>
        <h3 className="user-instruction">👇 choose a game 👇</h3>
      </div>
      <Game imageURL={imageURL} />

      <h3 className="footer">
        Made with ❤️ by{" "}
        <a href="https://github.com/PlayerR2/duo-cc12" target="_blank">
          PlayerR2
        </a>
      </h3>
    </UserProvider>
  );
}
