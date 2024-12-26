import React from "react";
import logo from "../img/ab.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Buttoncontainer } from "./Button";

const Navwrapper = styled.nav`
  background: #2a2a72;
  text-transform: capitalize;
  .nav-link {
    font-size: 1rem;
    color: var(--mainwhite);
  }
`;

function Navbar() {
  return (
    <Navwrapper className="navbar navbar-dark px-sm-4">
      <Link to="/">
        <img className="navbar-brand" src={logo} alt="logo" width={50} />
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-link ml-5">
          <Link to="/" className="nav-link">
          TechMart
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="ml-auto">
        <span className="ml-auto">
          <Buttoncontainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </Buttoncontainer>
        </span>
      </Link>
    </Navwrapper>
  );
}

export default Navbar;
