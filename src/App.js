import React from "react";
import Home from "./views/Home/Home";
import SignUp from "./views/Auth/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="logo">LOGO</h1>
      </nav>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
