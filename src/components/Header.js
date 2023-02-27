import React from "react";
import Card from 'react-bootstrap/Card';
import Rainier from './Rainier.jpg'
import Navigation from "./Navigation";

function Header() {
  return (
    <>
    <Card className="bg-dark text-white">
      <Card.Img src={Rainier} alt="Card image" />
      <Card.ImgOverlay style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
        <Card.Title className="bg-dark ryan p-1 bg-opacity-75 rounded-2 fs-2">Ryan Taylor: Full-Stack Web Development</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Navigation />
    </>
  );
}

export default Header