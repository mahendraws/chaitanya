import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import "./SearchBox.css";
// Cosum Icons
import close from "../../assets/images/close.png";
import logo from '../../assets/images/logo.jpg'
import search from "../../assets/images/loupe.png";
import user from "../../assets/images/user.png";
import addtocart from "../../assets/images/cart.png";

function Navigation() {
  const [searchBox, setSearchBox] = useState(false);
  // console.log(searchBox);

  return (
    <>
      {searchBox ? (
        <div>
          <div className="SearchBox">
            <div className="Sbox">
              <div>
                <input type="search" placeholder="Search..." />
              </div>
              <div className="SearchBoxBtn">
                <button
                  onClick={() => {
                    setSearchBox(!searchBox);
                  }}
                >
                  <img className="mx-3 mt-2" src={close} width="20px" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <Link to="/Home">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
            </Link>
            <Link to="/Aboutus">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
            </Link>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                SHOP
              </a>
              <div className="dropdown-content">
                <a href="#">Ayurvedic Products</a>
                <a href="#">Nutrition & Supplements</a>
                <a href="#">Personal Care</a>
              </div>
            </li>
            <Link to="/AllProducts">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PRODUCTS
                </a>
              </li>
            </Link>
            <li className="nav-item SearchItemIcon">
              <a className="nav-link" href="#">
                <button
                  onClick={() => {
                    setSearchBox(!searchBox);
                  }}
                >
                  <img src={search} alt="Search" width="25px" />
                </button>
              </a>
            </li>
            <li className="nav-item DropdownMenu">
              <a className="nav-link" href="#">
                <img
                  className="nav-link"
                  style={{ marginTop: "-9px" }}
                  src={user}
                  alt="Login"
                  width="40px"
                />
              </a>
              <div className="dropdown-content2">
                <Link to="/Login">
                  <a href="#" className="items">
                    Login
                  </a>
                </Link>
                <Link to="/Profile">
                  <a href="#" className="items">
                    Profile
                  </a>
                </Link>

                <a href="#" className="items">
                  Logout
                </a>
              </div>
            </li>
            <Link to="/Addtocart">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={addtocart} alt="Add To Cart" width="25px" />
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
