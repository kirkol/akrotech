import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import topImage from '../styles/images/automatic.jpg';

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navigation p-0" expand="md" dark={true}>
        <NavbarBrand className="logo-link" href="/">
          AKROTECH
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="nav-toggler mx-3" />
        <Collapse isOpen={isOpen} navbar className="flex-row-reverse">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link-custom" href="#about">
                O NAS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="#offer">
                OFERTA
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-custom" href="#contact">
                KONTAKT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div
        className="top-image"
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundPosition: `center 20%`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

export default Navi;
