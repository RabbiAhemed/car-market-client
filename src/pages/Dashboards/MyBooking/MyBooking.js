import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../UserContext/UserContext";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
            <th>SL</th>
            <th>Product</th>
            <th>Price</th>
            <th>User </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking._id}>
              <td>{index + 1}</td>
              <td>{booking.product_name}</td>
              <td>{booking.product_resalePrice}</td>
              <td>
                <div>
                  <p>{booking.displayName}</p> <p>{booking.email}</p>
                </div>
              </td>
              <td>
                <div
                  onClick={() => navigate("/pay-order")}
                  className=" text-white"
                >
                  pay
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBooking;
