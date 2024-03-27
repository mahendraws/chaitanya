import React, { useState } from "react";
import "./Reviews.css";
import Rating from "react-star-rating-lite";
import Reviews from "./Reviews";
function WriteReviews() {
  const [data, setData] = useState({
    name: "",
    email: "",
    rating: "",
    reviewTitle: "",
    bodyofReview: "",
  });

  // console.log(data.name);
  function sendData() {
    console.log(data);
  }

  function onClickHandler(Val) {
    // console.log("Clint Slect Rating", Val);
    setData({ ...data, rating: Val });
  }
  return (
    <>
      <div>
        <div className="container MainBox">
          <div>
            <div className="Main-heading">
              <h4>Customer Reviews</h4>
            </div>
            <div>
              <div>
                <p>
                  <Rating value="5" weight="23" className="m-3" />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ color: "#455A64" }}>Based on 0 reviews</p>
                </div>
                <div>
                  <p style={{ color: "green" }}>Write a review</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div>
              <div className="MainReview">
                <h4>Write a review</h4>

                <div className="reviewFilds">
                  <div className="">
                    <span style={{ color: "#455A64" }}>Name:</span>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                      }}
                    />
                    {/* Live :{data.name} */}
                  </div>
                  <div className="mt-3">
                    <span style={{ color: "#455A64" }}>Email :</span>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mt-3">
                    <p>
                      <span style={{ color: "#455A64" }}>Rating :</span>
                      <Rating weight="20" onClick={onClickHandler} />
                    </p>
                  </div>
                  <div className="mt-2">
                    <span style={{ color: "#455A64" }}>Review Title</span>
                    <input
                      type="text"
                      placeholder="Give Your Review Title"
                      onChange={(e) => {
                        setData({ ...data, reviewTitle: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mt-3 mb-2 TEXTARA">
                    <p>
                      <span style={{ color: "#455A64" }}>
                        Body of Review (1500)
                      </span>
                    </p>
                    <textarea
                      type="text"
                      placeholder="Give Your Review Title here..."
                      onChange={(e) => {
                        setData({ ...data, bodyofReview: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-3 review-Btn d-flex flex-row-reverse">
                  <button onClick={sendData}>SUBMIT REVIEW </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Reviews productId={1} />

            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default WriteReviews;
