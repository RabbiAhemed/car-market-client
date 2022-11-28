import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../components/BookingModal/BookingModal";
import Product from "../../components/Product/Product";
import "./Products.css";
const Products = () => {
  const products = useLoaderData();
  // console.log(products);

  const [item, setItem] = useState(null);
  return (
    <div>
      <div className="products-container my-5">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setItem={setItem}
          ></Product>
        ))}
      </div>
      {item && <BookingModal item={item}></BookingModal>}
    </div>

    // call booking modal in here
  );
};

export default Products;
