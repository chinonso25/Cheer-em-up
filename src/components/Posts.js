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

function Posts() {
  const [Prayers, setPrayers] = useState([]);
  const [Likes, SetLikes] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    listenforChange();
  }, []);

  const listenforChange = () => {
    let Prayers = [];
    firebase
      .database()
      .ref(`Requests`)
      .on("child_added", snapshot => {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().PrayerRequest,
          date: snapshot.val().date,
          likes: snapshot.numChildren() - 2
        };

        console.log(PRequest.likes);
        let PrayerRequests = Prayers;
        PrayerRequests.push(PRequest);

        setPrayers(PrayerRequests);
        console.log(Prayers);
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
  };

  const Like = x => {
    firebase
      .database()
      .ref(`/Requests/${x}`)
      .push({
        Like: true
      });

    var ref = firebase.database().ref(`/Requests/${x}`);
    ref.once("value").then(function(snapshot) {
      var a = snapshot.numChildren(); // 1 ("name")
      console.log(a - 2);
      SetLikes(a - 2);
    });
  };

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
                <h5>Posted on {Request.date}</h5>
                <h1>{Request.title}</h1>
                <Row style={divStyle.BottomRow}>
                  <Button
                    onClick={() => {
                      Like(Request.id);
                    }}
                    variant="outline-success"
                  >
                    Amen 🙏 {Request.likes}
                  </Button>
                  <Button variant="link">
                    <Link
                      to={{
                        pathname: `/Requests/${Request.id}`,
                        state: {
                          Request: Request
                        }
                      }}
                    >
                      Comments
                    </Link>
                  </Button>
                </Row>
                <Divider width="100%" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Posts;
