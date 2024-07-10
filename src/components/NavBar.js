import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
            <h1 style={{color: "white"}}>AsTech.</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#tools" className={activeLink === 'tools' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tools')}>Tools & Technologies</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/asfar-aman-408484267/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/mrasfarmahay"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/mr.asfaraman?utm_source=qr&igsh=MXRhazBmaHQ2ZWJvbQ=="><img src={navIcon3} alt="" /></a>
              </div>
              <a href="https://drive.google.com/file/d/1QqYLx54OdzQJ6FTFFaw-hIHXi4YRgVIG/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className="vvd"><span>Download Resume</span></button>
              </a>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
