import React from "react";
import "./style.css";
function ProductDetails({ ProductDescription, Ingredients, info1, info2 }) {
  return (
    <>
      <div>
        <div>
          <p>
            <b>{ProductDescription}:</b> {info1}
          </p>
          <p>
            <b>{Ingredients}:</b> {info2}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
