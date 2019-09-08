import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Prayer from "../pages/Prayer";

import Divider from "../components/Divider";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Bounce } from "react-activity";

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
  },
  BottomRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10
  },
  Dots: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  }
};

function Comments(props) {
  const [Comments, setComments] = useState([]);
  const [Likes, SetLikes] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    listenforChange();
  }, [props.x]);

  function listenforChange() {
    firebase
      .database()
      .ref(`Requests/${props.x}/Comment`)
      .on("child_added", snapshot => {
        let PRequest = {
          id: snapshot.key,
          comment: snapshot.val().Comments,
          author: snapshot.val().Author,
          date: snapshot.val().Date
        };
        setComments(Comments => [...Comments, PRequest]);
      });
  }

  if (Comments === undefined || Comments.length == 0) {
    return (
      <>
        <Container style={divStyle.Dots}>
          <Row className="justify-content-md-center" style={divStyle.Dots}>
            <Col>
              <h2>No Comments</h2>
            </Col>
          </Row>
        </Container>
        <Container style={divStyle.Dots}>
          <Row className="justify-content-md-center" style={divStyle.Dots}>
            <Col>
              <Bounce style={divStyle.Dots} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Row>
              <h2>Comments:</h2>
            </Row>
            {Comments.slice(0)
              .reverse()
              .map(Request => (
                <div className="note" key={Request.id}>
                  <h5>{Request.comment}</h5>
                  <h6>
                    Posted by {Request.author} on {Request.date}
                  </h6>
                  <Divider width="100%" />
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comments;
