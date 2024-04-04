import React from "react";
import "./style.css";
function HowToUseSection({ num, imgurl, title }) {
  return (
    <>
      <div class="card mx-3 MainCart">
        <span className="Box mx-4 mt-3">{num}</span>
        <img className="card-img-top p-4" src={imgurl} alt="Card cap" />
        <div className="card-body">
          <h5
            class="card-title"
            style={{
              fontSize: "22px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {title}
          </h5>
        </div>
      </div>
    </>
  );
}

export default HowToUseSection;
