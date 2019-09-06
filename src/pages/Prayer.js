import React,{useEffect} from "react";
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

function Prayer() {

    


  return (
    <div className="Jumbotron">
      <Jumbotron fluid style={divStyle.Picture}>
        <Container style={divStyle.Text}>
          <h1 style={divStyle.Text}>{Request}</h1>
          <h2>What's this all about?</h2>
        </Container>
      </Jumbotron>

      <Container>
        <p>
          Loool
        </p>
      </Container>
    </div>
  );
}

export default Prayer;