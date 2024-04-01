import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../contexts/shopContextProvider";

function Cart({val}) {
    const navigate = useNavigate()

    const {addToCart,isLogin} = useContext(ShopContext)

    const addCart=(id)=>{
        if(!isLogin)
        {
            navigate("/Login");
        }else{
          addToCart(id,1)
        }
      
      
      }


  return (
    <div>
<div
                    className="card-group"
                    style={{ width: "20rem", cursor: "pointer" }}
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                      width="100px"
                        src={val.productImages[0]}
                        className="card-img-top"
                        alt="..."
                        onClick={() => {
                          navigate(`/AllProducts/${val.productId}`);
                        }}
                      />
                      <div className="card-body">
                        <h6 className=" text-center mb-2">
                          <b>{val.title}</b>
                        </h6>
                        <div className="  text-center ">
                          <div className="card-text mb-2">
                            <span>From ₹ {val.price}</span>
                            <span
                              style={{
                                color: "gray",
                                fontSize: "15px",
                                fontWeight: "600",
                              }}
                            >
                              <s> ₹ {val.regularPrice}</s>
                            </span>
                            <span className="offertext"> SAVE 11%</span>
                          </div>
                          <div className="card-text Addtocart">
                            <button onClick={()=>{addCart(val.productId)}}> Add To Cart </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


    </div>
  )
}

export default Cart