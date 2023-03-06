import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">React POC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Counter">Counter</Nav.Link>
            <Nav.Link href="/Job">Job</Nav.Link>
            <Nav.Link href="/GasPlanets">GasPlanets</Nav.Link>
            <Nav.Link href="/TodoList">TodoList</Nav.Link>
            <Nav.Link href="/PredictAge">PredictAge</Nav.Link>
            <Nav.Link href="/DogImage">DogImage</Nav.Link>
            <Nav.Link href="/Form">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
