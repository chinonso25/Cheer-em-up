import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "typeface-oxygen";

require("firebase/auth");

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCgVoT5jrtxfXTBMxo3cnMkDSN3Yqtdn3g",
  authDomain: "cheer-em-up.firebaseapp.com",
  databaseURL: "https://cheer-em-up.firebaseio.com",
  projectId: "cheer-em-up",
  storageBucket: "",
  messagingSenderId: "639144140138",
  appId: "1:639144140138:web:2213b61e38d3b65ad31913"
});

// Initialize Firebase

export default firebaseConfig;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
