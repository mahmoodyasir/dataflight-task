import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function HomePage() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Semreg</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="mr-auto d-flex justify-content-end">
              <div>
                <LinkContainer to="/login">
                  <Nav.Link className="active">
                    <i className="fas fa-user"> Login</i>
                  </Nav.Link>
                </LinkContainer>
              </div>
              <div>
                <LinkContainer to="/registration">
                  <Nav.Link className="active">
                    <i className="fas fa-user"> Sign Up</i>
                  </Nav.Link>
                </LinkContainer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default HomePage;
