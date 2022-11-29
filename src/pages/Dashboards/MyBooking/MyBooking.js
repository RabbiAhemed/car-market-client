import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../UserContext/UserContext";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const url = `https://server-side-sand.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  console.log(bookings);
  return (
    <div>
      <h4 className="fw-bold">MY ORDERS</h4>
      {/*  */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>UserInfo</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr>
              <td>{index}</td>
              <td>{booking.product_name}</td>
              <td>{booking.product_resalePrice}</td>
              <td>{booking.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBooking;
