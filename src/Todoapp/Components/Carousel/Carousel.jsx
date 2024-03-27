import React, { useState } from "react";
import { sculptureList } from "./data.js";
import Style from "./Style.module.css";
function Carousel() {
  //   console.log(sculptureList);

  const [index, setIndex] = useState(0);

  // wee have give data from useState Hook in the new variable..!
  let product = sculptureList[index];

  // This is show more button
  const [showmore, setShoMore] = useState(false);
  let hasnext = true;

  // this is for Next Buttons
  function handleClick() {
    setIndex(index + 1);
  }

  // this is for Privious Button

  function handelClickPrev() {
    setIndex(index - 1);
  }

  return (
    <>
      <div className={Style.Container}>
        <div>
          <div className={Style.mainContainer}>
            <div className="card" style={{ width: "20rem" }}>
              <img
                style={{ width: "250px" }}
                className="card-img-top"
                src={product.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <div className={Style.MainHeadding}>
                  <h5 className={Style.cardTitle}>{product.Name}</h5>
                  <span>
                    Products <b style={{ color: "blue" }}>{index + 1}</b> of{" "}
                    <b style={{ color: "blue" }}>{sculptureList.length}</b>
                  </span>
                </div>

                <div className={Style.PriceHeading}>
                  <h6 style={{ color: "purple" }} className="card-title">
                    {product.Category}
                  </h6>
                  <h6> | </h6>
                  <h6 style={{ color: "purple" }} className="card-title">
                    {product.price}
                  </h6>
                </div>

                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={() => {
                    setShoMore(!showmore);
                  }}
                >
                  See Information
                </button>
                <p className={Style.Info}>{showmore && product.About}</p>
              </div>

              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button
                  className="btn btn-outline-danger"
                  onClick={handelClickPrev}
                  disabled={index <= 0 ? true : false}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-info"
                  onClick={handleClick}
                  disabled={index >= sculptureList.length - 1 ? true : false}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
