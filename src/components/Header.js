import React from "react";
import Card from 'react-bootstrap/Card';
import Rainier from './Rainier.jpg'
import Navigation from "./Navigation";

function Header() {
  return (
    <>
    <Card className="bg-dark text-white">
      <Card.Img src={Rainier} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Ryan Taylor</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Navigation />
    </>
  );
}

export default Header