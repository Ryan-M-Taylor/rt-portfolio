import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Navigation() {
  const [showAbout, setShowAbout] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowPortfolio(false);
    setShowContact(false);
    setShowResume(false);
  };

  const handlePortfolioClick = () => {
    setShowPortfolio(true);
    setShowAbout(false);
    setShowContact(false);
    setShowResume(false);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowPortfolio(false);
    setShowResume(false);
  };

  const handleResumeClick = () => {
    setShowResume(true);
    setShowAbout(false);
    setShowPortfolio(false);
    setShowContact(false);
  };

  return (
    <>
      <Nav
        activeKey="#about"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      ></Nav>
      <Navbar className="border-2 border-top border-bottom mb-2" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="#about" onClick={handleAboutClick}>
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#portfolio" onClick={handlePortfolioClick}>
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" onClick={handleContactClick}>
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#resume" onClick={handleResumeClick}>
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      {showAbout && <AboutMe />}
      {showPortfolio && <Portfolio />}
      {showContact && <Contact />}
      {showResume && <Resume />}
    </>
  );
}

export default Navigation;
