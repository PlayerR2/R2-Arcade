import React, { useState } from "react";
import Game from "./components/Game";
import "../src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import UserProvider from "./components/UserProvider";

export default function App() {
  //
  
  const [imageURL, setImageURL] = useState("");

  return (
    <UserProvider>
      <Navigation setImageURL={setImageURL} />
      <div className="header">
        <h1 className="title">GAME CENTER</h1>
        <h3 className="user-instruction">👇 choose a game 👇</h3>
      </div>
      <Game imageURL={imageURL} />
      <h3 className="footer">
        Made with ❤️ by{" "}
        <a href="https://github.com/PlayerR2/duo-cc12" target="_blank">
          PlayerR²
        </a>
      </h3>
    </UserProvider>
  );
}
