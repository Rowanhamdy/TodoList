import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
export default function NavBar() {
  const { logout, isLoggedIn} = useAuth();

  return (
    <Navbar expand="lg" className="bg-nav Navbar">
    <Container>
      <Navbar.Brand as={Link} to="/" className='text-white'>Todo List App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {!isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
          {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/dashboard/add">Add Item</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/list">Item List</Nav.Link>
                <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link>
              </>
            )}
          
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
