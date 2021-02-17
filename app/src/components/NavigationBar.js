import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'; 

const Styles = styled.div`
  .navbar {
    background-color: black;
  }

  .navbar-brand, .navbar-nav, .nav-link {
    color: #fff;

    &:hover {
      color: white;
    }
  }
`

export default function NavigationBar() {
  return (
    <Styles>
      <Navbar expand='sm' fixed='left' variant='dark'>
        <Navbar.Brand href='/'></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='flex-column'>
            <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/projects'>Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}
