import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Category = ({ category }) => {
  const { _id, category_id, category_name, image } = category;
  return <Link to={`/category/${_id}`}></Link>;
};

export default Category;
