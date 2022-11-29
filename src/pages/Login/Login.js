import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { setAuthToken } from "../../api/auth";

const Login = () => {
  const { googleSignIn, signInUser, setUser, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // setAuthToken(user);
        const currentUser = {
          email: user.email,
        };
        console.log(user.displayName);

        setUser(user);
        form.reset();
        navigate(from, { replace: true });
      })

      .catch((error) => {
        setLoading(false);
        console.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setAuthToken(result.user);
    });
    navigate(from, { replace: true });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Login</h2>

      <Form onSubmit={handleSubmit}>
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
            Register now
          </Link>
        </p>
      </Form>

      <div>
        <h6 className="mt-2">or</h6>

        <button
          onClick={handleGoogleSignIn}
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
