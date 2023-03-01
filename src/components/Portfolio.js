import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projects from "./Project";

function Portfolio() {
  return (
    <div className="text-center">
    <h1>My Projects</h1>
    <h4 className="mb-3">Click photo for GitHub repo</h4>
    <Row xs={1} md={3} className="g-5 mx-2">
      {projects.map((project) => (
        <Col key={project.id}>
          <Card>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={project.screenshot} />
            </a>
            <Card.Body className="text-bg-light ">
              <Card.Title className="fs-4">{project.title}</Card.Title>
              <Card.Text><a href={project.deployed}>Click here for deployed site or video of application</a></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Portfolio;
