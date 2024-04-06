import React from "react";
import Hero from "./Hero";
import BestSeller from "./BestSeller";
import Drslider from './Drsliders/Drsliders'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Drsliders/Drsliders.css'
import ReviewSliders from './ReviewSliders/ReviewSliders'
function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <Drslider/>
      <ReviewSliders/>
    </>
  );
}

export default Home;
