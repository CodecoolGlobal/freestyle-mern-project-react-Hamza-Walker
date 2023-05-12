import React, { useContext } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { AppContext } from '../../main';
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const {user} = useContext(AppContext);
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">My Notes App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#" className="text-light" onClick={()=> navigate("/notes")}>Display All Notes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light" onClick={()=> navigate("/notes/newnote")}>Create New Note</NavLink>
        </NavItem>
        <NavItem className="ml-3">
          <img src={user.iconURL} alt="User Avatar" className="rounded-circle" width="50" height="50" />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
