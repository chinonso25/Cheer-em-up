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

function Feed(props) {
  const [GoodMessage, setGoodMessage] = useState([]);
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
          title: snapshot.val().GoodMessage,
          date: snapshot.val().date,
          likes: snapshot.numChildren() - 2
        };

        let GoodMessages = [];
        GoodMessages.push(PRequest);

        setGoodMessage(GoodMessages);
      });

    firebase
      .database()
      .ref(`/Requests/${Post}`)
      .once("value")
      .then(function(snapshot) {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().GoodMessage,
          date: snapshot.val().date,
          likes: snapshot.child("Likes").numChildren()
        };

        setGoodMessage(PRequest);
      });
  };

  return (
    <>
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h5 style={{ color: "black" }}>Posted on {GoodMessage.date}</h5>
          <h1 style={divStyle.Quote}>{GoodMessage.title}</h1>
        </Container>
      </Jumbotron>
      <Comments x={GoodMessage.id} />
      <CommentBox x={GoodMessage.id} />
    </>
  );
}

export default Feed;
