import React from "react";

import { useLoaderData } from "react-router-dom";
const Payment = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>Payment for {data.Product_name}</h1>
    </div>
  );
};

export default Payment;
