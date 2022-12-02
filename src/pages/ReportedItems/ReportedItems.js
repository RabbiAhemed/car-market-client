import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const ReportedItems = () => {
  const url = "https://server-side-sand.vercel.app/reports";

  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1>Reported Items</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items?.length &&
            items?.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.Product_name}</td>
                <td>Delete</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportedItems;
