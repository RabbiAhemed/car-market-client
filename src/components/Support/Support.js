import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Support.css";
const Support = () => {
  return (
    <Container className="support-section my-5 fw-bold">
      <div className="border rounded p-5 fw-bold">
        <h2 className="fw-bold">
          WE WILL BE <span className="colored">HAPPY</span> TO HELP
        </h2>
        <p className="tagline">
          Our team is ready to answer any questions you have about buying or
          selling cars
        </p>
        <div className="call-us my-4">
          <div>
            <img
              className="border rounded-pill p-2"
              src="https://www.cars24.com/js/ca6ea09ecc5d325cd3457f24e2d2f61f.svg"
              alt=""
            />
          </div>
          <div>
            <h3 className="fw-bold">
              call us at <span className="colored">1800 258 5656</span>
            </h3>
          </div>
          <br />
        </div>
        <div className="faq my-2 fw-bold">
          <div>
            <img
              className="border rounded-pill p-2"
              src="https://www.cars24.com/js/4b33c7756cdce9c72eaba681f33c60bd.svg"
              alt=""
            />
          </div>
          <div>
            <h3 className="fw-bold">
              View <span className="colored">FAQ</span>
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Support;
