import React, { useState } from "react";
import "./Addtocart.css";

import Cart from "./Cart";
function Addtocart() {

  return (
    <div className="">
      <div className="container">
        <div>
          <div className="Heading-Cart">
            <div>
              <h4>Your Cart</h4>
            </div>
            <div>
              <p>CONTINUE SHOPPING</p>
            </div>
          </div>

          <div className="Product">
            <div>
              <p>PRODUCT</p>
            </div>
            <div>
              <p>QUANTITY</p>
            </div>
            <div>
              <p>TOTAL</p>
            </div>
          </div>
        </div>
        <hr />

                   <Cart title="shilajit DX" price="100"/>
                   <Cart title="shilajit DX" price="100"/>


        <hr />
      </div>
    </div>
  );
}

export default Addtocart;
