import React, { useState } from "react";
import "./Addtocart.css";
import product from "../../assets/ProductsImages/Madhumokshavatiforsugartretment_500x.jpg";
import Delete from "../../assets/images/delete.png";
import minus from "../../assets/images/minus.png";
import add from "../../assets/images/plus.png";
function Addtocart() {
  const [num, setNum] = useState(1);

  const inc = () => {
    setNum(num + 1);
  };
  const dec = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
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

        <div className="Product-info mt-4">
          <div className="Product-item">
            <img src={product} alt="" width="160px" />
            <div className="mt-4">
              <p style={{ color: "green" }}>Peedago Vati</p>
              <p>
                <b>₹</b> 240 /-
              </p>
              <p>Size : Pack of 1</p>
            </div>
          </div>

          <div className="Range">
            <div className="ProductRange">
              <div>
                <img
                  onClick={dec}
                  src={minus}
                  alt=""
                  width="18px"
                  style={{ marginTop: "10px", cursor: "pointer" }}
                />
              </div>
              <div>
                <span>{num}</span>
              </div>
              <div>
                <img
                  onClick={inc}
                  src={add}
                  alt=""
                  width="18px"
                  style={{ marginTop: "10px", cursor: "pointer" }}
                />
              </div>
            </div>
            <button className="mx-2">
              <img src={Delete} alt="" width="23px" />
            </button>
          </div>
          <div className="LastPrice">
            <p>
              <b>₹</b> 240 /-
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Addtocart;
