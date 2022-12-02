import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const AllUsers = () => {
  const url = "http://localhost:5000/users";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  const sellers = users.filter((user) => user.userRole === "seller");
  console.log(sellers);

  // const {sellers}=users.userRole.seller;
  return (
    <div>
      <h2>All Sellers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.length &&
            sellers?.map((seller, index) => (
              <tr key={seller?._id}>
                <td>{index + 1}</td>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
