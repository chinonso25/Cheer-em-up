import React, { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import * as firebase from "firebase";

import CommentBox from "../components/CommentBox";
import Comments from "../components/Comments";

import "./About.css";
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";

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

function Prayer(props) {
  const [Prayers, setPrayers] = useState([]);
  const [Likes, SetLikes] = useState(0);
  const {
    text,
    match: { params },
    Post
  } = props;

  const { name } = params;

  console.log(props);
  console.log(Post);

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

        console.log(PRequest);
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
        console.log(PRequest);

        setPrayers(PRequest);
        console.log(Prayers);
      });
  };

  return (
    <div className="Jumbotron">
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h5>Posted on {Prayers.date}</h5>
          <h2>{Prayers.title}</h2>
        </Container>
      </Jumbotron>
      <Comments x={Prayers.id} />
      <CommentBox x={Prayers.id} />
    </div>
  );
}

export default Prayer;
