import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/Moments_Logo.svg';


function NavBar() {
  return (
    <Navbar className='navbar'>
      <Nav className="mr-auto">
        <Nav.Link href="/">Storyboards</Nav.Link>
        <Nav.Link href="#aboutus">About Us</Nav.Link>
      </Nav>
      <Navbar.Brand className='logo' href="/"><img src={logo} alt='logo' /></Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href="#donate">Donate</Nav.Link>
        <Nav.Link href="#colunteer">Volunteer</Nav.Link>
      </Nav>
    </Navbar>
  );
}


export default NavBar;
