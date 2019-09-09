import React, { useEffect, useState } from "react";
import * as firebase from "firebase";

import CommentBox from "../components/CommentBox";
import Comments from "../components/Comments";

import "./About.css";
import { Jumbotron, Container } from "react-bootstrap";

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
  Quote: {
    color: "black"
  }
};

function Prayer(props) {
  const [Prayers, setPrayers] = useState([]);
  const { Post } = props;

  useEffect(() => {
    firebase.database();
    // Update the document title using the browser API
    listenforChange();
  }, []);

  const listenforChange = () => {
    firebase
      .database()
      .ref(`Requests`)
      .equalTo(Post)
      .on("child_added", snapshot => {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().PrayerRequest,
          date: snapshot.val().date,
          likes: snapshot.numChildren() - 2
        };

        let PrayerRequests = [];
        PrayerRequests.push(PRequest);

        setPrayers(PrayerRequests);
      });

    firebase
      .database()
      .ref(`/Requests/${Post}`)
      .once("value")
      .then(function(snapshot) {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().PrayerRequest,
          date: snapshot.val().date,
          likes: snapshot.child("Likes").numChildren()
        };

        setPrayers(PRequest);
      });
  };

  return (
    <>
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h5 style={{ color: "black" }}>Posted on {Prayers.date}</h5>
          <h1 style={divStyle.Quote}>{Prayers.title}</h1>
        </Container>
      </Jumbotron>
      <Comments x={Prayers.id} />
      <CommentBox x={Prayers.id} />
    </>
  );
}

export default Prayer;
