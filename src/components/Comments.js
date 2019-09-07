import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Prayer from "../pages/Prayer";

import Divider from "../components/Divider";
import { Container, Row, Col, Button } from "react-bootstrap";

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
  }
};

function Comments(props) {
  const [Prayers, setPrayers] = useState([]);
  const [Likes, SetLikes] = useState(0);

  useEffect(() => {
    firebase.database();
    // Update the document title using the browser API
    listenforChange();
    console.log(Prayers);
    console.log(props);
  }, []);

  function listenforChange() {
    let Prayers = [];
    firebase
      .database()
      .ref(`Requests/${props.x}/Comment`)
      .on("child_added", snapshot => {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().Comments
        };

        console.log(PRequest.title);
        let PrayerRequests = Prayers;
        PrayerRequests.push(PRequest);

        setPrayers(PrayerRequests);
      });

    firebase
      .database()
      .ref(`Requests`)
      .on("child_removed", snapshot => {
        let PrayerRequests = Prayers;
        PrayerRequests = PrayerRequests.filter(
          note => note.id !== snapshot.key
        );
        setPrayers(PrayerRequests);
      });
  }

  if (!Prayers) {
    return <div />;
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            {Prayers.map(Request => (
              <div className="note" key={Request.id}>
                <h1>{Request.title}</h1>
                <Row style={divStyle.BottomRow}></Row>
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
