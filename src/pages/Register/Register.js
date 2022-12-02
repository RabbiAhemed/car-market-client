import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import useToken from "../../hooks/useToken";
import { AuthContext } from "../../UserContext/UserContext";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [userRole, setUserRole] = useState("buyer");
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const roleValue = form.options.value;
    if (roleValue == "seller") {
      setUserRole(roleValue);
    } else {
      setUserRole("buyer");
    }
    //
    // console.log(userRole);
    createUser(email, password)
      .then((result) => {
        // setAuthToken(result.user, roleValue);
        const user = result.user;
        setSuccess(true);
        updateUser(name).then(() => {
          // Profile updated!
          // ...
          saveUserToDb(user.displayName, user.email, roleValue);
        });
        // setAuthToken(result.user, roleValue);

        // console.log(token);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  const saveUserToDb = (name, email, userRole) => {
    const user = { name, email, userRole };
    fetch("process.env.REACT_APP_API_URL/users", {
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
      {success ? (
        <h1 className="text-success text-center fw-bold">
          Registration Successful !!!
        </h1>
      ) : (
        <h2 className="text-center">Register</h2>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Label className="text-muted">Name</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-muted">Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-muted">Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-muted">Choose account type</Form.Label>
          <Form.Select
            required
            aria-label="Default select example"
            name="options"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </Form.Select>
        </Form.Group>

        <Button variant="info" type="submit">
          Register
        </Button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Already Registered?
          <Link to="/login" className="link-success">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
