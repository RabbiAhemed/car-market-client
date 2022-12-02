import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
const Product = ({ product, setItem, setShow }) => {
  const handleBooking = (product) => {
    setShow(true);
    setItem(product);
  };
  const handleReport = (product) => {
    if (product) {
      fetch("https://server-side-sand.vercel.app/reports", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success(`${product.Product_name} has been reported to admin`);
          }
        });
    }
  };
  const {
    Product_name,
    Product_image,
    product_location,
    product_originalPrice,
    product_resalePrice,
    product_yearsOfUse,
    product_timeOfPosting,
    product_SellerName,
  } = product;
  return (
    <div className="card fw-bold my-2">
      <img className="card-img-top product-img" src={Product_image} alt="" />
      <div className="card-body p-3">
        <h5 className="card-title">{Product_name}</h5>
        <div className="seller-location">
          <p>Seller: {product_SellerName}</p>
          <p>Location: {product_location}</p>
          <p>posted: {product_timeOfPosting}</p>
        </div>
        <div className="price-condition">
          <p>Original Price: {product_originalPrice}</p>
          <p>Resale Price: {product_resalePrice}</p>
          <p>Years of Use: {product_yearsOfUse}</p>
        </div>
        <div className="buttons">
          <Button
            className="btn-success fw-bold"
            onClick={() => handleBooking(product)}
          >
            Book Now
          </Button>
          <Button
            className="btn-danger fw-bold"
            onClick={() => handleReport(product)}
          >
            Report
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
