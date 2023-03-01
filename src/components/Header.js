import React from "react";
import Card from 'react-bootstrap/Card';
import Navigation from "./Navigation";
import Rainier from '../images/Rainier.jpg';
import RainierPhone from '../images/Rainier-phone.png';

function Header() {
  const isMobile = window.matchMedia("(max-width: 576px)").matches;

  return (
    <>
    <Card className="bg-dark text-white">
      <Card.Img src={isMobile ? RainierPhone : Rainier} alt="Card image" className="header-photo"/>
      <Card.ImgOverlay style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
        <Card.Title className="bg-dark p-1 bg-opacity-50 rounded-2 fs-2 ryan">Ryan Taylor: Full-Stack Web Development</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Navigation />
    </>
  );
}

export default Header;


