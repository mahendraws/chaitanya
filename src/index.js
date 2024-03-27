import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// ================================================================================
// To Do List in React Js | Redux Toolkit JS
// import App from "./Todoapp/App";

// Exam portal  App

// import App from "./ExamPortal/App";

// This shooping web app
import App from "./ShoppingApp/App";

// import HackerRank from "./hackerRank/HackerRank";
// ================================================================================

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <React.StrictMode>
      <App />

      {/* <HackerRank /> */}
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
