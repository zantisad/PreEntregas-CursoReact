import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import CardWidget from "../CartWidget/CardWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropDownOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link className="link" to="/">
          DoesNeakers
        </Link>
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <NavLink className="NavLink" to="/sneakers">
              Sneakers
            </NavLink>
          </li>
          <li>
            <Dropdown isOpen={dropDownOpen} toggle={abrirCerrarDropdown}>
              <DropdownToggle caret className="botonBrands">
                Brands
              </DropdownToggle>

              <DropdownMenu>
                <NavLink to="/category/nike">
                  <DropdownItem>Nike</DropdownItem>
                </NavLink>
                <NavLink to="/category/adidas">
                  <DropdownItem>Adidas</DropdownItem>
                </NavLink>
                <NavLink to="/category/puma">
                  <DropdownItem>Puma</DropdownItem>
                </NavLink>
                <NavLink to="/category/newbalance">
                  <DropdownItem>New Balance</DropdownItem>
                </NavLink>
                <NavLink to="/category/reebok">
                  <DropdownItem>Reebok</DropdownItem>
                </NavLink>
                <NavLink to="/category/vans">
                  <DropdownItem>Vans</DropdownItem>
                </NavLink>
                <NavLink to="/category/converse">
                  <DropdownItem>Converse</DropdownItem>
                </NavLink>
                <NavLink to="/category/asics">
                  <DropdownItem>Asics</DropdownItem>
                </NavLink>
                <NavLink to="/category/hoka">
                  <DropdownItem>Hoka</DropdownItem>
                </NavLink>
                <NavLink to="/category/saucony">
                  <DropdownItem>Saucony</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </Dropdown>
          </li>

          <li>
            <NavLink className="NavLink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="switch-carrito">
        <Link to="/cart" className="no-underline">
          <CardWidget />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
