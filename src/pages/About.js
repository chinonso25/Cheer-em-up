import React from "react";
import HeaderBar from "../components/HeaderBar";
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

function About() {
  return (
    <>
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h1 style={divStyle.Text}>Quotia</h1>
          <h2>What's this all about?</h2>
        </Container>
      </Jumbotron>

      <Container>
        <p>
          Quotia definition the best kind of gossip, typically shared between
          friends. it’s a bonding tool for people of all ages. tea is usually
          about someone you know, but can also extend to celebrities random
          internet scandals, etc. ugh I’ve missed so much what’s the tea sis? I
          heard some tea about Saturday night! what’s the tea with them are they
          a couple?
        </p>
      </Container>
    </>
  );
}

export default About;
