import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product/Product";
import "./Products.css";
const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
