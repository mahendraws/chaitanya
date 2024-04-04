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
import CheckoutMain from "./components/Checkout/CheckoutMain"
import MainThankyou from "./components/Thankyou/MainThankyou"
import Footter from './components/footter/Footter'
import RefundPolicy from './components/RefundPolicy/RefundPolicy'
function App({ Component, pageProps }) {
  return (
    <div>
  
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
            <Route path="/Checkout" element={<CheckoutMain />} />
            
            <Route path="/Thankyou" element={<MainThankyou />} />
            <Route path="/RefundPolicy" element={<RefundPolicy />} />
            <Route path="/WriteReviews" element={<WriteReviews />} />

            <Route path="*" element={<Nopage />} />
          </Routes>
          <Footter/>
        </BrowserRouter>

    </div>
  );
}

export default App;
