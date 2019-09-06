import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index.js";
import HeaderBar from "../components/HeaderBar";

import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import Posts from "./Posts.js";
var rug = require("random-username-generator");

var moment = require("moment");

const imgMyimageexample = require("../img/Prayer.jpg");

const divStyle = {
  Picture: {
    width: "100%",
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: "cover"
  },
  Text: {
    paddingBottom: 20,
    textAlign: "center",
    color: "#90a4ae"
  }
};

function Request() {
  const [request, setrequest] = useState("");
  const [wordSize, setwordSize] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    var new_username = rug.generate();
    console.log(new_username);
  }, []);

  const onChangeHandler = evt => {
    setrequest(evt.target.value);
    setwordSize(request.length);
  };

  const createNote = () => {
    firebase.database();
    if (request !== "") {
      firebase
        .database()
        .ref(`Requests/`)
        .push({
          PrayerRequest: request,
          date: moment().format("MMMM Do YYYY")
        });
      setrequest("");
      setwordSize(0);
    }
  };

  return (
    <div className="App">
      <div>
        <Jumbotron fluid style={divStyle.Picture}>
          <Container>
            <h1>Send your Request</h1>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Prayer Request..."
                aria-describedby="basic-addon2"
                as="textarea"
                aria-label="With textarea"
                value={request}
                onChange={evt => onChangeHandler(evt)}
                maxLength={256}
              />
              <InputGroup.Append>
                <Button onClick={createNote} variant="primary">
                  Send
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <p>No hate speech will be tolerated.</p>

            <h5>{wordSize}/256</h5>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Request;
