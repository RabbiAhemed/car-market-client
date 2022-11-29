import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Category from "../Category/Category";
import "./Categories.css";
const Categories = () => {
  // const [categories, setCategories] = useState([]);
  // react query
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://server-side-sand.vercel.app/categories").then((res) =>
        res.json()
      ),
  });

  // useEffect(() => {
  //   fetch("https://server-side-sand.vercel.app/categories")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, [categories]);
  return (
    <div className="my-5 ">
      <p className="fw-bold text-center">Browse items by category</p>
      <div className="categories-container mx-5">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
