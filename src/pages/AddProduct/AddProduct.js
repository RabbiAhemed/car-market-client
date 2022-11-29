import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const AddProduct = () => {
  const handleSubmit = (event) => {
    // generate todays date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${day}-${month}-${year}`;
    // get forms values
    event.preventDefault();
    const form = event.target;
    const Product_name = form.name.value;
    const product_originalPrice = form.originalPrice.value;
    const product_resalePrice = form.resalePrice.value;
    const product_location = form.location.value;
    const product_yearsOfUse = form.year.value;
    const product_timeOfPosting = currentDate;
    const category_id = form.options.value;

    const productInfo = {
      category_id,
      Product_name,
      product_originalPrice,
      product_resalePrice,
      product_location,
      product_yearsOfUse,
      product_timeOfPosting,
    };
    console.log(productInfo);
  };

  return (
    <div className="my-5">
      <h4 className="fw-bold text-center">Add Product</h4>
      <Form onSubmit={handleSubmit} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Product name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="originalPrice"
            placeholder="Original price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="resalePrice"
            placeholder="Resale price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="location"
            placeholder="Location"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="year"
            placeholder="Years of use"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-muted">Choose Category</Form.Label>
          <Form.Select
            required
            aria-label="Default select example"
            name="options"
          >
            <option value="1">Sedan</option>
            <option value="2">Convertible</option>
            <option value="3">Sports</option>
          </Form.Select>
        </Form.Group>

        <Button variant="info" type="submit">
          Add
        </Button>
      </Form>

      {/* <Button onClick={handleClick}>click</Button> */}
    </div>
  );
};

export default AddProduct;
