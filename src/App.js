import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Prayer from "./pages/Prayer";

import HeaderBar from "./components/HeaderBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    firebase.database();
  });
  return (
    <Router>
      <HeaderBar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
  <Route path={`/Requests/`} render={() => <Prayer />} />
    </Router>
  );
}

export default App;
