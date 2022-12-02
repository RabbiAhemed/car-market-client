import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { setAuthToken } from "../../api/auth";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { googleSignIn, signInUser, setUser, setLoading } =
    useContext(AuthContext);
  const [userRole, setUserRole] = useState("buyer");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);
  if (token) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const roleValue = "buyer";
    signInUser(email, password, roleValue)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setUserEmail(user.email);

        setUser(user);

        form.reset();
      })

      .catch((error) => {
        setLoading(false);
        console.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setUserEmail(result.user.email);
      saveUserToDb(result.user.displayName, result.user.email, "buyer");
    });
  };

  const saveUserToDb = (name, email, userRole = "buyer") => {
    const user = { name, email, userRole };
    fetch("https://server-side-sand.vercel.app/users", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmail(email);
        console.log(data);
      });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
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

        <Button
          onClick={handleGoogleSignIn}
          type="submit"
          variant="warning"
          className="fw-bold p-3"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
