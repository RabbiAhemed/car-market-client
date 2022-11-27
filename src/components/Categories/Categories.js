import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import "./Categories.css";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);
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
