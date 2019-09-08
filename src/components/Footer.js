import React from "react";
import { Container, Row, Jumbotron, Button } from "react-bootstrap";
import Divider from "../components/Divider";


const divStyle = {
    Text: {
      paddingBottom: 20,
      textAlign: "center",
      color: "#90a4ae",
      justifyContent: "center"
    },
    BottomRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: 10
    },
    Dots: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    }
  };

function Footer() {
  return (
      
    <footer style={divStyle.Text}>
      <Divider />
      <p>Created by : Chinonso Ude </p>
      <p>Copyright © Quotia 2019</p>
    </footer>
  );
}

export default Footer;
