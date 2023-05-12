import React, { useContext } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { AppContext } from '../../main';

const NavigationBar = () => {
  const {user} = useContext(AppContext);
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">My Notes App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#" className="text-light">Display All Notes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">Create New Note</NavLink>
        </NavItem>
        <NavItem className="ml-3">
          <img src={user.iconURL} alt="User Avatar" className="rounded-circle" width="50" height="50" />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
