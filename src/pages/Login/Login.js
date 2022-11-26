import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Don't have an account?
          <Link to="/register" className="link-success">
            Register
          </Link>
        </p>
      </Form>

      <div>
        <h6 className="mt-2">or</h6>

        <button
          type="button"
          className="btn btn-warning text-white btn-floating mx-1"
        >
          <p className="lead fw-bold fs- mb-0 me-3">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
