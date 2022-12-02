import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useBuyer from "../hooks/UseBuyer";
import { AuthContext } from "../UserContext/UserContext";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();
  if (loading || isBuyerLoading) {
    return <Spinner animation="border" role="status"></Spinner>;
    // return <p>loading</p>;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
