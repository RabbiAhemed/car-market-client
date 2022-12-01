import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  const {
    article_id,
    article_title,
    article_image,
    article_description,
    author_name,
    author_image,
    _id,
  } = article;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={article_image} />
        <Card.Body>
          <Card.Title>{article_title}</Card.Title>
          <Card.Text>{article_description.slice(0, 100)}</Card.Text>
          <Link className="btn btn-info" to={`/articles/${_id}`}>
            Read More
          </Link>
          {/* <Button variant="primary"></Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Article;
