import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import SearchEvent from './SearchEvent';


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg"
        collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='navbar-brand'>EventsOnline</Navbar.Brand>
        </LinkContainer>
          
          
          <div>
            <SearchEvent />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ms-auto">
           
              <Nav.Link ><i className='fas fa-calendar-plus'></i> Create Event</Nav.Link>
            
           
              <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
           
           
              <Nav.Link ><i className='fas fa-pen-to-square'></i> Sign Up</Nav.Link>
           
            </Nav>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header