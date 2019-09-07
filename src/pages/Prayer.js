import React, { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import * as firebase from "firebase";

import Request from "../components/Request";
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
    // Update the document title using the browser API
    listenforChange();
  });

  const listenforChange = () => {
    let Prayers = [];
    firebase
      .database()
      .ref(`Requests`)
      .orderByChild("id")
      .equalTo(Post)
      .on("child_added", snapshot => {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().PrayerRequest,
          date: snapshot.val().date,
          likes: snapshot.numChildren() - 2
        };

        console.log(PRequest);
        let PrayerRequests = Prayers;
        PrayerRequests.push(PRequest);

        setPrayers(PrayerRequests);
      });

    console.log(Prayers);
  };

  return (
    <div className="Jumbotron">
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h1 style={divStyle.Text}>{Request}</h1>
          <h2>What's this all about? {Post}</h2>
        </Container>
      </Jumbotron>

      <Container>
        <p>Loool</p>
      </Container>
    </div>
  );
}

export default Prayer;
