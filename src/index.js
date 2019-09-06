import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
require("firebase/auth");

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCFg0pG_kXtd6UmUGiWniopfW7030IbfFI",
  authDomain: "prayersupport-5107b.firebaseapp.com",
  databaseURL: "https://prayersupport-5107b.firebaseio.com",
  projectId: "prayersupport-5107b",
  storageBucket: "",
  messagingSenderId: "340364043158",
  appId: "1:340364043158:web:4329166199eac84642f3b7"
});

// Initialize Firebase

export default firebaseConfig;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
