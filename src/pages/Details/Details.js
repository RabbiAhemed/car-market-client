import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const article = useLoaderData();
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
      <Container className="mx-auto  my-5">
        <MDBCard className="mb-3">
          <MDBCardImage position="top" src={article_image} alt="..." />
          <MDBCardBody>
            <MDBCardTitle>
              <h3 className="fw-bold">{article_title}</h3>
            </MDBCardTitle>
            <MDBCardText>
              <img
                className="author-img border rounded-pill"
                src={author_image}
                alt=""
                srcset=""
              />
              <small className="text-muted ms-2">{author_name}</small>
            </MDBCardText>
            <MDBCardText>{article_description}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Container>
    </div>
  );
};

export default Details;
