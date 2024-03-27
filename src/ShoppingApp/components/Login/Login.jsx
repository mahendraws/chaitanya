import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();

  const [logininfo, setLoginInfo] = useState({
    email: "",
    Password: "",
  });

  function sendInfo() {
    console.log(logininfo);
  }

  // console.log(logininfo.email);

  function sendData(e) {
    e.preventDefault();
    const form = e.currentTarget;
    var data = new FormData(form);

    fetch("https://www.ncenanded.com/project/chaitanya/server.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => displayResult(res));
  }

  function displayResult(response) {
    console.log(response);

    if (response.success == 1) {
      navigate("/AllProducts");
    } else {
      alert("Woring User Name and Password..!");
    }

    // document.getElementById("result").innerHTML = Result = ${response.success};
  }

  return (
    <>
      <div className="container Main">
        <div className="MainLogin">
          <h5>Login</h5>

          <hr />

          <form method="post" onSubmit={sendData}>
            <div className="InputFild">
              <div>
                <input
                  name="user_email"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => {
                    setLoginInfo({ ...logininfo, email: e.target.value });
                  }}
                />
                {/* {logininfo.name} */}
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setLoginInfo({ ...logininfo, Password: e.target.value });
                  }}
                />
              </div>

              {/* {logininfo.password} */}

              <p className="F-pass">
                <u>Forgot your password ? </u>
              </p>
            </div>
            <div className="Sign-btn">
              <input type="submit" value="Sign In" />

              <p className="Account">
                Don't have an account?
                <Link to="/Account">
                  <u className="mx-2">Create account</u>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
