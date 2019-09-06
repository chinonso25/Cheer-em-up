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


function HeaderBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/">Prayer Support</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

      
  );
}

export default HeaderBar;
