import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg"
      collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">EventsOnline</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ms-auto">
              <Nav.Link href="/create"><i className='fas fa-calendar-plus'></i> Create Event</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
              <Nav.Link href="/sign up"><i className='fas fa-pen-to-square'></i> Sign Up</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header