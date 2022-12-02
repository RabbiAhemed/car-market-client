import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../pages/shared/Menu.js/Menu";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../UserContext/UserContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);

  return (
    <div>
      <Menu></Menu>
      {/* <Outlet></Outlet> */}
      <Container>
        <Row>
          <Col className="left-side-menu col-3">
            <Link to="/dashboard">
              <p>My Bookings</p>
            </Link>
            {isAdmin && (
              <>
                <Link to="/dashboard/all-users">
                  <p>All Users</p>
                </Link>
                <Link to="/dashboard/reports">
                  <p>Reported Items</p>
                </Link>
              </>
            )}
          </Col>
          <Col>
            <div className="outlet-contents col-9">
              <Outlet></Outlet>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardLayout;
