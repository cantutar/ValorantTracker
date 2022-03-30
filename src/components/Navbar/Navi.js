import classes from "./Navi.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Navi(props) {
  return (
    <>
      <Navbar fixed="top" expand="lg" className={classes.Navbar} id="backg">
        <Container>
          <Navbar.Brand>
            <img
              alt="Navbar Logo"
              src="https://via.placeholder.com/50x35"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className={classes.Home} href="#home">
                Home
              </Nav.Link>
              <Nav.Link className={classes.Champions} href="#features">
                Champions
              </Nav.Link>
              <Nav.Link className={classes.Maps} href="#pricing">
                Maps
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
