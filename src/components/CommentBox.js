import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import Divider from "../components/Divider";
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Row
} from "react-bootstrap";

var rug = require("random-username-generator");

var moment = require("moment");

const divStyle = {
  Text: {
    paddingBottom: 20,
    textAlign: "center",
    color: "#90a4ae"
  },
  Box: {
    width: "80%",
    alignItems: "center"
  }
};

function CommentBox(props) {
  const [Message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    firebase.database();
    setUsername(rug.generate());
    // Update the document title using the browser API
  }, []);

  const onChangeHandler = evt => {
    setMessage(evt.target.value);
  };

  const comment = () => {
    firebase.database();
    if (Message !== "") {
      firebase
        .database()
        .ref(`Requests/${props.x}/Comment`)
        .push({
          Comments: Message,
          Author: username,
          Date: moment().format("MMMM Do YYYY")
        });
      setMessage("");
      console.log(props.x);
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <InputGroup style={divStyle.Box}>
            <InputGroup.Prepend></InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={Message}
              onChange={evt => onChangeHandler(evt)}
              rows="3"
              maxLength={256}
            />
          </InputGroup>
          <Button onClick={comment} variant="info">
            Send
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default CommentBox;
