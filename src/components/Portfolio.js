import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import projects from "./Project";

function Portfolio() {
  return (
    <div className="text-center portfolio">
    <h4 className="pt-2">My Projects</h4>
    <h6 className="mb-3">Click photo for GitHub repo</h6>
    <Row xs={1} md={3} className="g-5 mx-2">
      {projects.map((project) => (
        <Col key={project.id}>
          <Card className="card-body">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={project.screenshot} />
            </a>
            <Card.Body className="">
              <Card.Title className="fs-4">{project.title}</Card.Title>
              <Card.Text><a href={project.deployed} target="_blank">Click here for deployed site or video of application</a></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default Portfolio;
