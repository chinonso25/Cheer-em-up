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
    color: "black",
    fontWeight: "900",
    fontSize: 72
  },
  definition: {
    paddingTop: 10
  },
  Declaration: {
    marginBottom: 10,
    textAlign: "center"
  },
  Questions: {
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center"
  }
};

function About() {
  return (
    <>
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h1 style={divStyle.Text}>
            <i>Cheer Em' Up</i>
          </h1>
        </Container>
      </Jumbotron>

      <Container>
        <div style={divStyle.Declaration} id="containerIntro">
          <h2>
            <b>Cheer Em' Up</b>
          </h2>
          <p style={divStyle.definition}>
            <i>Anonymous Inspirator</i>
          </p>
        </div>

        <Row style={{ padding: 30 }}>
          <h4>
            Welcome to Cheer Em’ Up, an anonymous community-driven online space
            dedicated to cheering up anyone in need of some uplifting!
          </h4>
        </Row>
        <Row style={divStyle.Questions}>
          <p>
            Ever been at work, home or just anywhere, in dire need of
            inspiration?
          </p>
        </Row>
        <Row style={divStyle.Questions}>
          <p>Maybe it’s been a tough day, and you just need encouragement?</p>
        </Row>
        <Row style={divStyle.Questions}>
          <p>Feeling inspired, and want to cheer someone up?</p>
        </Row>
        <div style={divStyle.Declaration} id="containerIntro">
          <h6>
            <b>Then Welcome...!</b>
          </h6>
        </div>
      </Container>
    </>
  );
}

export default About;
