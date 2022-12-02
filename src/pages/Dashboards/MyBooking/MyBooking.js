import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../UserContext/UserContext";
import useBuyer from "../../../hooks/UseBuyer";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
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

  return (
    <div>
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
          {bookings?.length &&
            bookings?.map((booking, index) => (
              <tr key={booking?._id}>
                <td>{index + 1}</td>
                <td>{booking?.product_name}</td>
                <td>{booking?.product_resalePrice}</td>
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
