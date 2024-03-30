import React,{useState} from 'react'
import product from "../../assets/ProductsImages/Madhumokshavatiforsugartretment_500x.jpg";
import Delete from "../../assets/images/delete.png";
import minus from "../../assets/images/minus.png";
import add from "../../assets/images/plus.png";

function Cart({title,price}) {

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


<div className="Product-info mt-4">
          <div className="Product-item">
            <img src={product} alt="" width="160px" />
            <div className="mt-4">
              <p style={{ color: "green" }}>{title}</p>
              <p>
                <b>₹</b> {price} /-
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

  
  )
}

export default Cart