import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index.js";

import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import Posts from "./Posts.js";
var rug = require("random-username-generator");

function Request() {
  const [request, setrequest] = useState("");
  const [wordSize, setwordSize] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    var new_username = rug.generate();
    console.log(new_username);
    firebase.database();
  });

  const onChangeHandler = evt => {
    setrequest(evt.target.value);
    setwordSize(request.length);
    console.log(request);
  };

  const createNote = () => {
    firebase.database();
    if (request !== "") {
      firebase
        .database()
        .ref(`Requests/`)
        .push({
          PrayerRequest: request
          ///date: moment().format("MMMM Do YYYY")
        });
      setrequest("");
      setwordSize(0);
    }
  };

  

  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Send your Request</h1>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={request}
              onChange={evt => onChangeHandler(evt)}
            />
            <InputGroup.Prepend>
              <Button onClick={createNote} variant="primary">
                Send
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
          <p>No hate speech will be tolerated.</p>

          <h5>{wordSize}/250</h5>
        </Container>
      </Jumbotron>

      <Posts  />
    </div>
  );
}

export default Request;
