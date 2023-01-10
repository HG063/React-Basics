import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">React POC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/React-Basics">Home</Nav.Link>
            <Nav.Link href="/React-Basics/Profile">Profile</Nav.Link>
            <Nav.Link href="/React-Basics/Contact">Contact</Nav.Link>
            <Nav.Link href="/React-Basics/Counter">Counter</Nav.Link>
            <Nav.Link href="/React-Basics/Job">Job</Nav.Link>
            <Nav.Link href="/React-Basics/GasPlanets">GasPlanets</Nav.Link>
            <Nav.Link href="/React-Basics/TodoList">TodoList</Nav.Link>
            <Nav.Link href="/React-Basics/PredictAge">PredictAge</Nav.Link>
            <Nav.Link href="/React-Basics/DogImage">DogImage</Nav.Link>
            <Nav.Link href="/React-Basics/Form">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
