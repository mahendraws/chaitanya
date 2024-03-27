import React, { useState } from "react";
import "./Style.css";
function InfoForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmaile] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <div className="Container">
        <div>
          <div className="col-12 Heading">
            <h2 className="title position-relative pb-2 mb-4">
              {" "}
              | INFORMATION - 01 |
            </h2>
          </div>
          <div className="col-12">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="form-row">
                  <div className="control-group col-sm-6 INput mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                      name="Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="control-group col-sm-6 INput mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="email"
                      placeholder="Mobile Number"
                      required="required"
                      name="Mobile"
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                    />
                  </div>

                  <div className="control-group col-sm-6 INput mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="email"
                      placeholder="Email"
                      required="required"
                      name="Email"
                      onChange={(e) => {
                        setEmaile(e.target.value);
                      }}
                    />
                  </div>
                  <div className="control-group col-sm-6 INput mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="address"
                      placeholder="Address"
                      required="required"
                      name="Email"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="RightContianer">
          <h1>| INFORMATION - 02 | </h1>
          <div className="mt-4 Info">
            <p className="help-block  mt-3 ">
              | Name :- <span>{name}</span>
            </p>
            <p className="help-block  mt-3 ">
              | Mobile Number :- <span>{mobile}</span>
            </p>
            <p className="help-block  mt-3 ">
              | Email :- <span>{email}</span>
            </p>
            <p className="help-block  mt-3 ">
              | Address :- <span>{address}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoForm;
