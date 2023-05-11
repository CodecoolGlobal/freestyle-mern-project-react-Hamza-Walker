import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = (user) => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">My Notes App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#">Display All Notes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Create New Note</NavLink>
        </NavItem>
        <NavItem>
          <img src={user.iconURL} alt="User Profile" />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
