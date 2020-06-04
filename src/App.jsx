import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/Game";
import "../src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import GameScreen from "./components/GameScreen";
import Dashboard from "./components/Dashboard";
import UserProvider from "./components/UserProvider";
import { Spinner } from "react-bootstrap";

export default function App() {
  const [isFetching, setIsFetching] = useState(true);

  return (
    <Router>
      <UserProvider setIsFetching={setIsFetching}>
        {isFetching ? (
          <Spinner
            animation="grow"
            variant="light"
            className="loading-spinner"
          />
        ) : (
          <Navigation />
        )}
        <Route exact path="/" component={Game} />
        <Route path="/game" component={GameScreen} />
        <Route path="/dashboard" component={Dashboard} />
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
