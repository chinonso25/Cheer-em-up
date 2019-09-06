import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";


function App() {
  useEffect(() => {
    // Update the document title using the browser API
   firebase.database()

  });
  return (
    <Router>
      <HeaderBar />
    </Router>
  );
}

export default App;
