import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const AllBuyers = () => {
  const url = "http://localhost:5000/users";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const buyers = users.filter((user) => user.userRole === "buyer");
  console.log(buyers);

  return (
    <div>
      <h2>All Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.length &&
            buyers?.map((buyer, index) => (
              <tr key={buyer?._id}>
                <td>{index + 1}</td>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllBuyers;
