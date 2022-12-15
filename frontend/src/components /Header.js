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
        <LinkContainer to = '/'>
          <Navbar.Brand>EventsOnline</Navbar.Brand>
          </LinkContainer>
          <div>
            <SearchEvent />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ms-auto">
            <LinkContainer to = '/create'>
              <Nav.Link ><i className='fas fa-calendar-plus'></i> Create Event</Nav.Link>
            </LinkContainer>
            <LinkContainer to = '/'>
              <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to = '/'>
              <Nav.Link ><i className='fas fa-pen-to-square'></i> Sign Up</Nav.Link>
            </LinkContainer>
            </Nav>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header