import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { AuthContext } from "../../../UserContext/UserContext";
import useBuyer from "../../../hooks/UseBuyer";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isBuyer] = useBuyer(user.email);
  const url = `https://server-side-sand.vercel.app/bookings?email=${user?.email}`;

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
      {bookings && <h4 className="fw-bold">MY ORDERS</h4>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Product</th>
            <th>Price</th>
            <th>User Info</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.length &&
            bookings?.map((booking, index) => (
              <tr key={booking?._id}>
                <td>{index + 1}</td>
                <td>{booking?.Product_name}</td>
                <td>{booking?.product_resalePrice}</td>
                <td>
                  <div>
                    <p>name: {booking.displayName}</p>{" "}
                    <p>email: {booking.email}</p>
                  </div>
                </td>
                <td>
                  {booking && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <Button>Pay</Button>
                    </Link>
                  )}
                  {booking && booking.paid && (
                    <span className="fw-bold">Paid</span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBooking;
