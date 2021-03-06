import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
      <a data-testid="link" href="https://github.com/mirandat77">
          <span role="img" aria-label="flamingo"> 🦩 </span> Github
        </a>
        <NavLink className="nav-link" to="/">
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink to="/about">
              <div className="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio">
              <div className="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <div className="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume">
              <div className="nav-font text-light">Resume</div>
            </NavLink>
         
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;
