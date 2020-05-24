import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from "./components/Game";
import "../src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import UserProvider from "./components/UserProvider";
import GameScreen from "./components/GameScreen";

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Navigation />
        <div className="header">
          <h1 className="title">GAME CENTER</h1>
        </div>
        <Route exact path="/" component={Game} />
        <Route path="/game" render={({props})=> <GameScreen props={{...props}, "eatNgrow"}/>} />
        <h3 className="footer">
          Made with ❤️ by{" "}
          <a href="https://github.com/PlayerR2/duo-cc12" target="_blank">
            PlayerR²
          </a>
        </h3>
      </UserProvider>
    </Router>
  );
}
