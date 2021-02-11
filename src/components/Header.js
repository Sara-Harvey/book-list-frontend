import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar navbar-default="true">
      <Navbar.Brand as={Link} to='/'><h5>Home</h5></Navbar.Brand>
      <Navbar.Brand as={Link} to='/categories/1/stories'><h5>Read</h5></Navbar.Brand>
      <Navbar.Brand as={Link} to='/categories/2/stories'><h5>Hear</h5></Navbar.Brand>
      <Navbar.Brand as={Link} to='/random'><h5>Random</h5></Navbar.Brand>
    </Navbar>
  )
}

export default Header;