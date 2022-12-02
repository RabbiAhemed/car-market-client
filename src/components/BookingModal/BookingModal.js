import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../UserContext/UserContext";

const BookingModal = ({ item, show, setItem }) => {
  console.log(show);
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  const { product_name, product_resalePrice } = item;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const location = form.location.value;
    const bookingInfo = {
      product_name,
      product_resalePrice,
      displayName,
      email,
      location,
      number,
    };
    if (bookingInfo) {
      fetch("https://server-side-sand.vercel.app/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookingInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setItem(null);
            toast.success(`you have booked ${bookingInfo.product_name}`);
          }
        });
    }

    console.log(bookingInfo);
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
      <ToastContainer />
    </Modal>
  );
};

export default BookingModal;
