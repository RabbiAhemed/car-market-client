import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../pages/shared/Menu.js/Menu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Menu></Menu>
      {/* <Outlet></Outlet> */}
      <Container>
        <Row>
          <Col className="left-side-menu col-3">
            <p>sidebar option 1</p>
            <p>sidebar option 2</p>
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
