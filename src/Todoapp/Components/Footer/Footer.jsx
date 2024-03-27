import React from "react";
import Style from "./Footer.module.css";
function Footer() {
  return (
    <div className={Style.container}>
      <div>
        <span className="mx-1">&#169;</span>
        <span className="mx-1">Coppy Right - 2024 </span>
      </div>

      <div className={Style.Text}>
        <span> | Create By </span>
        <a href="https://sggaikwadportfolio.netlify.app/">Sudhanshu Gaikwad</a>
      </div>
    </div>
  );
}

export default Footer;
