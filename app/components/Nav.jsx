import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

const Nav = () => (
  <nav className="nav">
    <NavLink to="/" brand>React</NavLink>
    <NavLink to="/book">Book</NavLink>
    <NavLink
      href="#">
        Code
    </NavLink>
    <NavLink
      href="#">
        Demos
    </NavLink>
    <NavLink href="#">
      Website
    </NavLink>
  </nav>
);

export default Nav;
