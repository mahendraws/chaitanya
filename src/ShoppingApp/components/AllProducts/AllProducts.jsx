import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../data.json";
import "./Allproducts.css";

function AllProducts() {
  const usenavigate = useNavigate();
  return (
    <>
      <div className="container mt-4 ">
        <div class="row row-cols-1 row-cols-md-3">
          {Data.map((val, index) => {
            return (
              <>
                <div class="col mb-4">
                  <div
                    className="card-group"
                    style={{ width: "20rem", cursor: "pointer" }}
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={val.productImages[0]}
                        className="card-img-top"
                        alt="..."
                        onClick={() => {
                          usenavigate(`/AllProducts/${val.productId}`);
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
                            <button> Add To Cart </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
