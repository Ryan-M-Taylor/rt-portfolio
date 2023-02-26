import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projects from "./Project";

function Portfolio() {
  return (
    <Row xs={1} md={3} className="g-5 bg-dark">
      {projects.map((project) => (
        <Col key={project.id}>
          <Card>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={project.screenshot} />
            </a>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;
