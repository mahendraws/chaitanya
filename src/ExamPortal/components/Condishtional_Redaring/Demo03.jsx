import React, { useState } from "react";

function Demo03() {
  const [showmore, setShowmore] = useState(false);
  console.log("Show More >>>", showmore);
  return (
    <div>
      <div className="container ">
        <div className=" mt-4 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Web Developer</h5>
              <p className="card-text">
                What Does a Web Developer Do and How Do I Become One ?
              </p>
              <button
                href="#"
                onClick={() => {
                  setShowmore(!showmore);
                }}
                className="btn btn-primary"
              >
                Learn More...
              </button>

              {showmore ? (
                <p className="cart-text mt-2 ">
                  A web developer is a programmer who develops World Wide Web
                  applications using a client–server model. The applications
                  typically use HTML, CSS, and JavaScript in the client, and any
                  general-purpose programming language in the server. HTTP is
                  used for communications between client and server.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo03;
