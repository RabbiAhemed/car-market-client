import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  const { article_title, article_image, article_description, _id } = article;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="my-3">
        <Card.Img variant="top" src={article_image} />
        <Card.Body>
          <Card.Title>{article_title}</Card.Title>
          <Card.Text>{article_description.slice(0, 75)}...</Card.Text>
          <Link className="btn btn-info" to={`/articles/${_id}`}>
            Read More
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Article;
