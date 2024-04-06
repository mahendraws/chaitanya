import React, { useState,useContext } from "react";
//import "./ReviewSliders.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSellerNew.css"
import { ShopContext } from "../../contexts/shopContextProvider";
import Cart from "../Cart";

function BestSellerNew() {

    const {allProducts,addToCart,isLogin} = useContext(ShopContext)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container" id="Main-Box2">

      <h2
          style={{
            color: "rgb(5, 95, 5)",
            fontSize: "32px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Best Seller
        </h2>
        <p className="text-center mb-4 mt-3">
          Best.. Selling range of ayurvedic products and medicine where ancient
          wisdom meets modern wellness. Each product is meticulously crafted
          using Ayurveda principles for purity, potency and effectiveness. Our
          ayurvedic medicine online x store has rejuvenating supplements to
          luxurious skincare elixirs, we've selected time-tested remedies.
        </p>

        <div className="slider-container">
          <Slider {...settings}>
          {allProducts.map((val,index) => {
            return (
                <Cart val={val} key={index}/>       
            );
          })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default BestSellerNew;
