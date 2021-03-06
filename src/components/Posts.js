import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { Link } from "react-router-dom";

import Divider from "../components/Divider";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Bounce } from "react-activity";
import "react-activity/dist/react-activity.css";

const imgMyimageexample = require("../img/Prayer.jpg");

const divStyle = {
  Picture: {
    width: "100%",
    backgroundImage: `url(${imgMyimageexample})`,
    backgroundSize: "cover",
  },
  Text: {
    paddingBottom: 20,
    textAlign: "center",
    color: "#90a4ae",
  },
  BottomRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
  },
  Dots: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};

function Posts(props) {
  const [GoodMessages, setGoodMessages] = useState([]);

  useEffect(() => {
    listenforChange();
  }, []);

  function listenforChange() {

    firebase
      .database()
      .ref(`Requests`)
      .on("child_added", (snapshot) => {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().GoodMessage,
          date: snapshot.val().date,
          likes: snapshot.child("Likes").numChildren(),
          comments: snapshot.child("Comment").numChildren(),
        };
        setGoodMessages((GoodMessages) => [...GoodMessages, PRequest]);
      });

    firebase
      .database()
      .ref(`Requests`)
      .on("child_removed", () => {
        alert("Why you have to be mean man?");
        window.location.reload();
      });

      firebase
      .database()
      .ref(`Requests`)
      .on("child_changed", (snapshot) => {
        
      });

  }

  const Like = (x) => {
    firebase.database().ref(`/Requests/${x}/Likes`).push({
      Like: true,
    });

    firebase
      .database()
      .ref(`/Requests/${x}/Likes`)
      .once("value")
      .then(function (snapshot) {
        var a = snapshot.numChildren(); // 1 ("name")
      });
  };

  if (GoodMessages === undefined || GoodMessages.length == 0) {
    return (
      <Container style={divStyle.Dots}>
        <Row className="justify-content-md-center" style={divStyle.Dots}>
          <Col>
            <Bounce style={divStyle.Dots} />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            {GoodMessages.slice(0)
              .reverse()
              .map((Request) => (
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
                      Cheers 🙌 {Request.likes}
                    </Button>
                    <Button variant="link">
                      <Link to={`/Requests/${Request.id}`}>
                        {Request.comments} Comments
                      </Link>
                    </Button>
                  </Row>
                  <Divider width="100%" />
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Posts;
