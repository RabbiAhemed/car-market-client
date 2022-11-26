import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-5">
      <img
        className="img-fluid"
        src="https://i.ibb.co/71nKhyM/404page.jpg"
        alt="404page"
        border="0"
      />
      <br />
      <Link to="/" type="button" className="btn btn-info text-white fw-bold">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
