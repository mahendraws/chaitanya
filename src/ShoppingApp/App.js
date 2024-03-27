import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import ProductPage from "./components/Productpage/ProductPage";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./components/Login/Login";
import Account from "./components/createAccount/Account";
import Profile from "./components/Profile/Profile";
import Addtocart from "./components/Addtocart/Addtocart";
import WriteReviews from "./components/Reviews/WriteReviews";
import Nopage from "./components/Nopage/Nopage";

function App({ Component, pageProps }) {
  return (
    <div>
      <PrimeReactProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home {...pageProps} />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/AllProducts/:id" element={<ProductPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Addtocart" element={<Addtocart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/WriteReviews" element={<WriteReviews />} />

            <Route path="*" element={<Nopage />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
