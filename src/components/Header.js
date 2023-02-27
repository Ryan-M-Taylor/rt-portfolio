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
        <Card.Title className="bg-dark fs-1 ryan" style={{width: 'fit-content'}}>Ryan Taylor: Full-Stack Web Development</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Navigation />
    </>
  );
}

export default Header