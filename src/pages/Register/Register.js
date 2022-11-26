import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center">Register</h2>
      <Form>
        <Form.Label className="text-muted">Name</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-muted">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-muted">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-muted">Upload an image</Form.Label>
          <br />
          <input
            required
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-muted">Choose account type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Buyer</option>
            <option value="2">Seller</option>
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
