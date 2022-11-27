import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import "./Menu.css";
const Menu = () => {
  const { logOutUser, user } = useContext(AuthContext);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg=""
        variant="dark"
        id="nav-color"
        style={{ backgroundColor: "rgb(5, 5, 40)" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <img
              className="w-25"
              src="https://i.ibb.co/ngLPrdm/RESALE-ZONE-removed.png"
              alt="RESALE-ZONE-removed"
              border="0"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-items">
              <Link to="/" className="text-white mx-2">
                Home
              </Link>

              <Link to="/blogs" className="text-white mx-2">
                Blogs
              </Link>
            </Nav>
            <Nav className="nav-items">
              {!user && (
                <Link to="/register" className="text-white mx-2">
                  Register
                </Link>
              )}

              {user ? (
                <Link onClick={logOutUser} className="text-white mx-2">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="text-white mx-2">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
