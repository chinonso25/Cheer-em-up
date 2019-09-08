import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Prayer from "../pages/Prayer";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const divStyle = {
  Text: {
    paddingBottom: 20,
    textAlign: "center",
    color: "#90a4ae"
  },
  BottomRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10
  }
};

function HeaderBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/" style={divStyle.Text}>
          Quotia
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav.Link>
          <Link to="/" style={divStyle.Text}>
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about" style={divStyle.Text}>
            About
          </Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderBar;
