import classes from "./Navi.module.css";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navi(props) {
  return (
    <>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className={classes.Navbar}
      >
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
              <Nav.Link className={classes.Home} as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link
                className={`${classes.Agents} mx-lg-5`}
                as={NavLink}
                to="/agents"
              >
                Agents
              </Nav.Link>
              <Nav.Link className={classes.Maps} as={NavLink} to="/maps">
                Maps
              </Nav.Link>
              <Nav.Link className={classes.Maps} as={NavLink} to="/player">
                player(test only)
              </Nav.Link>
              <Nav.Link className={classes.Maps} as={NavLink} to="/404">
                404(test only)
              </Nav.Link>
              <Nav.Link className={classes.Maps} as={NavLink} to="/video">
                PlayerVideo(test only)
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <OffCanvasExample placement={"end"} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        alt="Navbar Logo"
        src="https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png"
        width="30"
        height="30"
        className="d-inline-block align-top rounded-circle"
        onClick={handleShow}
      />

      <Offcanvas
        scroll={false}
        backdrop={true}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>username</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>user info</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
