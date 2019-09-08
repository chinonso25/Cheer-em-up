import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Prayer from "./pages/Prayer";

import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import * as firebase from "firebase";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    firebase.database();
  });
  return (
    <Router >
      <div >
      <HeaderBar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/Requests/:Post"
        render={props => (
          <Prayer text="Hello, " {...props} Post={props.match.params.Post} />
        )}
      />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
