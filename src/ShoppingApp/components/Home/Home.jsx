import React from "react";
import HeroNew from "./HeroNew";
import BestSellerNew from "./BestSellerNew";
import Drslider from './Drsliders/Drsliders'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Drsliders/Drsliders.css'
import ReviewSliders from './ReviewSliders/ReviewSliders'
import Benefit from "./benefit/Benefit";
function Home() {
  return (
    <>
      <HeroNew />
      <BestSellerNew />
      <Benefit/>
      <Drslider/>
      <ReviewSliders/>
    </>
  );
}

export default Home;
