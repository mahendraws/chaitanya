import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import "./Account.css";
function Account() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  function handelClickSendData() {
    // console.log(data);
    // alert("Hello");
    axios
      .post("https://www.ncenanded.com/project/chaitanya/createcust.php", data)
      .then(function (response) {
        console.log("Create Account Seanding Data >>> ", response.data);
      });
  }

  // async function handelClickSendData() {
  //   try {
  //     const response = await axios.post(
  //       "https://www.ncenanded.com/project/chaitanya/createcust.php",
  //       data
  //     );
  //     console.log("Create Account Sending Data >>> ", response.data);
  //   } catch (error) {
  //     console.error("Error while sending data:", error);
  //   }
  // }
  return (
    <>
      <div className="container MainAc">
        <div className="MainAccount">
          <h5>Create Account </h5>

          <hr />
          <div className="InputFild02">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="text"
                name="mobilenumber"
                placeholder="Mobile Number"
                onChange={(e) => {
                  setData({ ...data, mobilenumber: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="Create-Account-btn">
            <button onClick={handelClickSendData}>Create Account </button>

            <p className="Account">
              Have an account?
              <Link to="/Login">
                <u className="mx-2">Sign in</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
