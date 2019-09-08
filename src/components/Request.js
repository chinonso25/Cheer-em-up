import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";
var rug = require("random-username-generator");

var moment = require("moment");

const imgMyimageexample = require("../img/Prayer.jpg");

const divStyle = {
  Picture: {
    width: "100%",
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: "cover",
    marginBottom: "8vh",
    color: "#90a4ae",
    margingTop: 0
  },
  Text: {
    paddingBottom: 20,
    textAlign: "center",
    color: "#90a4ae"
  },
  Request: {
    textAlign: "center",
    color: "white",
    marginBottom: 30
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
      <Jumbotron fluid style={divStyle.Picture}>
        <Container>
          <h1 style={divStyle.Request}>Post Your Quote</h1>
          <Row className="justify-content-md-center">
            <Col sm>
              <InputGroup className="mb-3">
                <FormControl
                  aria-describedby="basic-addon2"
                  as="textarea"
                  aria-label="With textarea"
                  value={request}
                  onChange={evt => onChangeHandler(evt)}
                  maxLength={256}
                  rows="4"
                />
              </InputGroup>
              <Col>
                <Button onClick={createNote} variant="secondary">
                  Submit
                </Button>
              </Col>
            </Col>
          </Row>
          <p>No hate speech will be tolerated.</p>

          <h5>{wordSize}/256</h5>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Request;
