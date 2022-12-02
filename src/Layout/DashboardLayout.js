import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../pages/shared/Menu.js/Menu";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../UserContext/UserContext";
import useSeller from "../hooks/useSeller";
import useBuyer from "../hooks/UseBuyer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isSeller] = useSeller(user.email);
  const [isBuyer] = useBuyer(user.email);

  return (
    <div>
      <Menu></Menu>
      {/* <Outlet></Outlet> */}
      <Container>
        <Row>
          <Col className="left-side-menu col-3">
            <Link to="/dashboard/my-bookings">
              {isBuyer && <h4>My Orders</h4>}
            </Link>
            {isAdmin && (
              <>
                <Link to="/dashboard/all-sellers">
                  <p>All Sellers</p>
                </Link>
                <Link to="/dashboard/all-buyers">
                  <p>All Buyers</p>
                </Link>
                <Link to="/dashboard/reports">
                  <p>Reported Items</p>
                </Link>
              </>
            )}
            {isSeller && (
              <>
                <Link to="/dashboard/add-product">
                  <p>Add Product</p>
                </Link>
                <Link to="/dashboard/my-products">
                  <p>My Products</p>
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
