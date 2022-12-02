import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const AllUsers = () => {
  const url = "http://localhost:5000/users";

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

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
          {users?.length &&
            users?.map((user, index) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
