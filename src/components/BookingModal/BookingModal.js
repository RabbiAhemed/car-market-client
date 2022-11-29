import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../UserContext/UserContext";

const BookingModal = ({ item, show, setItem }) => {
  console.log(show);
  const { user } = useContext(AuthContext);
  const { product_name, product_resalePrice } = item;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const location = form.location.value;
    console.log(typeof number, location);
    setItem(null);
  };
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{product_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>seller: {user?.displayName}</Modal.Body>
      <Modal.Body>email: {user?.email}</Modal.Body>
      <Modal.Body>price: {product_resalePrice}</Modal.Body>

      <Form className="w-75 mx-3 mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="mobile number"
            name="number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Location"
            name="location"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default BookingModal;
