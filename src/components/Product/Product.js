import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";
const Product = ({ product, setItem, setShow }) => {
  const {
    product_name,
    product_image,
    product_location,
    product_originalPrice,
    product_resalePrice,
    product_yearsOfUse,
    product_timeOfPosting,
    product_sellerName,
  } = product;
  return (
    <div className="card fw-bold my-2">
      <img className="card-img-top product-img" src={product_image} alt="" />
      <div className="card-body p-3">
        <h5 className="card-title">{product_name}</h5>
        <div className="seller-location">
          <p>Seller: {product_sellerName}</p>
          <p>Location: {product_location}</p>
          <p>posted: {product_timeOfPosting}</p>
        </div>
        <div className="price-condition">
          <p>Original Price: {product_originalPrice}</p>
          <p>Resale Price: {product_resalePrice}</p>
          <p>Years of Use: {product_yearsOfUse}</p>
        </div>
        <Button onClick={setShow(true) && (() => setItem(product))}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Product;
