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
    color: "black",
    marginBottom: 30
  },
  BottomRow: {
    display: "flex",
    justifyContent: "space-between",
    color: "black"
  }
};

function Request() {
  const [request, setrequest] = useState("");
  const [wordSize, setwordSize] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
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
    <div>
      <Jumbotron fluid style={divStyle.Picture}>
        <Container>
          <h1 style={divStyle.Request}>
            <i>Cheer Someone Up</i>
          </h1>
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
              <div style={divStyle.BottomRow}>
                <div>
                  <p>No hate speech will be tolerated.</p>
                  <h5>{wordSize}/256</h5>
                </div>
                <Button onClick={createNote} variant="secondary">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Request;
