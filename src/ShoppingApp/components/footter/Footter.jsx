import React from "react";
import "./Footter.css";
import { useNavigate } from "react-router-dom";
// All Icons
import phone from "../../assets/images/telephone.png";
import email from "../../assets/images/email.png";
import accept from "../../assets/images/accept-circular-button-outline.png";
import help from "../../assets/images/help.png";
import amazonpay from "../../assets/images/amazon-pay.png";
import googlepay from "../../assets/images/google-pay.png";
import moneypay from "../../assets/images/money.png";
import visa from "../../assets/images/visa.png";
function Footter() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Main-footter">
        <div className="items-footter">
          <div className="help-main">
            <span className="d-flex justify-content-start">
              <img src={help} alt="" />
              <p className="mx-2">Help Topics</p>
            </span>

            <p
              onClick={() => {
                navigate("/PrivacyPolicy");
              }}
              style={{ cursor: "pointer" }}
            >
              Privacy Policy
            </p>
            <p
              onClick={() => {
                navigate("/Aboutus");
              }}
              style={{ cursor: "pointer" }}
            >
              ABOUT US
            </p>
            <p
              onClick={() => {
                navigate("/AllProducts");
              }}
              style={{ cursor: "pointer" }}
            >
              PRODUCTS
            </p>
          </div>

          <div className="contact-main">
            <span className="d-flex justify-content-start">
              <img src={phone} alt="" />
              <p className="mx-2">COntact Us</p>
            </span>
            <p>+ 91 7219745613</p>
          </div>
          <div className="Email-main">
            <span className="d-flex justify-content-start">
              <img src={email} alt="" />
              <p className="mx-2">Email</p>
            </span>
            <p>sudhanshugaikwad517@gmail.com</p>
          </div>
          <div className="weaccept-main">
            <span className=" d-flex justify-content-start">
              <img src={accept} alt="" width="30px" height="30px" />
              <p className="mx-2">We Accepct</p>
            </span>
            <img src={amazonpay} alt="Amazon Pay" width="70px" />
            <img
              className="mx-2"
              src={googlepay}
              alt="Google Pay"
              width="50px"
            />
            <img className="mx-" src={visa} alt="VISA" width="50px" />
            <img className="mx-1" src={moneypay} alt="Mony Pay" width="50px" />
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>© 2024 CHAITANYA NATURAL. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </>
  );
}

export default Footter;
