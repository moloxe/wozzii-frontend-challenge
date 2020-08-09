import React from "react";
import logo from "./logo.svg";
import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <Link className="App-link" to="/signup">
          Wozzii-frontend-challenge: Sign Up
        </Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
