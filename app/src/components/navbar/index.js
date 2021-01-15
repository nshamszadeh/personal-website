import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/technicals" activeStyle>
            Technical Works
          </NavLink>
          <NavLink to="/fun" activeStyle>
            Fun Programs
          </NavLink>
        </NavMenu>
        <NavBtn>
          
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
