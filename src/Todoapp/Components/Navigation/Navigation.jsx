import React from "react";
import { Link } from "react-router-dom";
import arrowicon from "../../assets/images/down-arrow.png";
// This is Css File, We have import here
import "./Navigation.css";
import { Style } from "@mui/icons-material";

function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light MainContainer">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              color: "rgb(176, 6, 210)",
            }}
            href="#"
          >
            Web Developer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={Style.BTN}>
              <img src={arrowicon} width="22px" alt="Down" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item items">
                <Link to="/MainToDo">
                  <a class="nav-link" aria-current="page" href="#">
                    | TO DO APP
                  </a>
                </Link>
              </li>

              <li class="nav-item items">
                <Link to="/Carousel">
                  <a class="nav-link" aria-current="page" href="#">
                    | GALLERY
                  </a>
                </Link>
              </li>

              <li class="nav-item items">
                <Link to="/InfoForm">
                  <a class="nav-link" aria-current="page" href="#">
                    | INFORMATION
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
