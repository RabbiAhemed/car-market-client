import { useQuery } from "@tanstack/react-query";
import React from "react";
import Article from "../Article/Article";
import "./CarArticles.css";
const CarArticles = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      fetch("http://localhost:5000/articles").then((res) => res.json()),
  });

  console.log(articles.length);
  return (
    <div className="my-5">
      <h4 className="text-center my-4">Latest Car Articles</h4>
      <div className="articles-container mx-5">
        {articles?.map((article) => (
          <Article key={article.article_id} article={article}></Article>
        ))}
      </div>
    </div>
  );
};

export default CarArticles;
