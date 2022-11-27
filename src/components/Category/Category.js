import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Category = ({ category }) => {
  const { _id, category_id, category_name, image } = category;
  return (
    <Link to={`/category/${_id}`}>
      <div className="category-card border rounded py-4">
        <img className="category_image" src={image} alt="category_image" />
        <h4 className="mx-2 fw-bold ">{category_name}</h4>
      </div>
    </Link>
  );
};

export default Category;
