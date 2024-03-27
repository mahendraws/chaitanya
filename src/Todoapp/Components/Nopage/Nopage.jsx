import React from "react";
import Erro from "../../assets/images/erros.png";
function Nopage() {
  return (
    <>
      <h5
        className="text-center mt-5"
        style={{ color: "red", fontSize: "30px", fontFamily: "inherit" }}
      >
        ERROR - 404
      </h5>
      <div className="text-center mt-5">
        <img src={Erro} alt="Error" width="450px" />
      </div>
    </>
  );
}

export default Nopage;
