import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../UserContext/UserContext";
import useSeller from "../../../hooks/useSeller";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSeller] = useSeller(user.email);
  const url = `https://server-side-sand.vercel.app/products?email=${user?.email}`;

  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(products);

  return (
    <div>
      {products && <h4 className="fw-bold">MY PRODUCTS</h4>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="fw-bold">SL</th>
            <th className="fw-bold">Product Name</th>
            <th className="fw-bold">Original Price</th>
            <th className="fw-bold">Resale Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.length &&
            products?.map((product, index) => (
              <tr key={product?._id}>
                <td>{index + 1}</td>
                <td>{product?.Product_name}</td>
                <td>{product?.product_originalPrice}</td>
                <td>{product?.product_resalePrice}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBooking;
