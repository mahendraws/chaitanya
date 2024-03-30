import React, { useContext, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import "./SearchBox.css";
// Cosum Icons
import close from "../../assets/images/close.png";
import logo from '../../assets/images/logo.jpg'
import search from "../../assets/images/loupe.png";
import user from "../../assets/images/user.png";
import addtocart from "../../assets/images/cart.png";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../contexts/shopContextProvider";
function Navigation() {
  const [searchBox, setSearchBox] = useState(false);
  const {setLogin,isLogin,cartItems,setCartItems} = useContext(ShopContext)
  // console.log(searchBox);
const navigate = useNavigate()

const logout=()=>{
 setLogin(false);
 setCartItems(0);

}
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
            width="120px"
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
     
            <Link to="/AllProducts">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SHOP
                </a>
              </li>
            </Link>
            
            {/* <li className="nav-item SearchItemIcon">
              <a className="nav-link" href="#">
                <button
                  onClick={() => {
                    setSearchBox(!searchBox);
                  }}
                >
                  <img src={search} alt="Search" width="25px" />
                </button>
              </a>
            </li> */}

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
                {
                  (isLogin)?<>
                <Link to="/Profile" className="items">Profile</Link>
                <Link to="/Home" className="items" onClick={logout}>Logout</Link></>
                :
                <Link to="/Login" className="items">Login</Link>
                }
                
                
              </div>
            </li>
            <Link to="/Addtocart">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {cartItems}
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
