import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import "./Categories.css";
const Categories = () => {
  const categories = useLoaderData();

  console.log(categories, categories?.length);
  return (
    <div className="categories-container my-5 mx-5">
      {categories.map((category) => (
        <Category key={category._id} category={category}></Category>
      ))}
    </div>
  );
};

export default Categories;
