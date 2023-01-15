import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  Offcanvas,
} from "react-bootstrap";
import logo from "../assets/shared/logo.svg";
import iconClose from "../assets/shared/icon-close.svg";
import menu from "../assets/shared/icon-hamburger.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <NavbarBs expand="md" className="mb-3 navbar p-0">
      <Container fluid className="fluidCon p-4 p-md-0">
        <NavbarBs.Brand to="/" as={NavLink} className="logo ms-3 ms-md-5">
          <img src={logo} alt="logo" />
        </NavbarBs.Brand>
        <hr className="hr d-none d-xxl-block" />
        <NavbarBs.Toggle
          to="/"
          aria-controls="offcanvasNavbar-expand-md"
          as={NavLink}
          className="menuBtn"
          // href="#"
          onClick={(e) => handleShow(e)}
        >
          <img src={menu} alt="menu" />
        </NavbarBs.Toggle>
        <NavbarBs.Offcanvas
          className="sidebar"
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header className="">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
            <Button variant="" className="mt-3 me-2" onClick={handleClose}>
              <img src={iconClose} alt="closeBtn" />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <div className="navlinkCon">
                <Nav.Link className="navlink" as={NavLink} to="/">
                  <span className="fw-bold">00</span> Home
                </Nav.Link>
                <Nav.Link className="navlink" as={NavLink} to="/destination">
                  <span className="fw-bold">01</span> Destination
                </Nav.Link>
                <Nav.Link className="navlink" as={NavLink} to="/crew">
                  <span className="fw-bold">02</span> Crew
                </Nav.Link>
                <Nav.Link className="navlink" as={NavLink} to="/technology">
                  <span className="fw-bold">03</span> Technology
                </Nav.Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </NavbarBs.Offcanvas>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
