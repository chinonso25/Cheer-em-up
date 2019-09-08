import React from "react";
import "./About.css";

import { Jumbotron, Container, Row } from "react-bootstrap";

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
  definition: {
    padding: 10
  },
  Declaration: {
    marginBottom:20
  }
};

function About() {
  return (
    <>
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h1 style={divStyle.Text}>Cheer Me Up</h1>
          <h2>What's this all about?</h2>
        </Container>
      </Jumbotron>

      <Container>
        <div style={divStyle.Declaration} id="containerIntro" >
          <h1><b>Cheer Me Up</b></h1>
          <p style={divStyle.definition}><i>definition</i></p>
        </div>
        the best kind of gossip, typically shared between friends. it’s a
        bonding tool for people of all ages. tea is usually about someone you
        know, but can also extend to celebrities random internet scandals, etc.
        ugh I’ve missed so much what’s the tea sis? I heard some tea about
        Saturday night! what’s the tea with them are they a couple?
      </Container>
    </>
  );
}

export default About;
