import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';

export const NavBar = () => { 
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
    
    
      return (
        <Router>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo}  alt="Logo"  />
              </Navbar.Brand>
              {/*
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#partners" className={activeLink === 'partners' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('partners')}>Partners</Nav.Link>
                  <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.instagram.com/uofwaterloo/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.instagram.com/uofwaterloo/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/uofwaterloo/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
                  </div>
                  <HashLink to='#connect'>
                    <button className="vvd"><span>Let’s Connect</span></button>
                  </HashLink>
                </span>
              </Navbar.Collapse>
            */}
            </Container>
          </Navbar>
        </Router>
      )
    }