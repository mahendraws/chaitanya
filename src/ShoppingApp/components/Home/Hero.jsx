import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Hero() {
  // Thi si Carousel Images
  const BannersData = [
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/herbal_health.webp?v=1704188055&width=1200",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/Stress_and_anxiety_banner.webp?v=1694248102&width=1200",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/Constipation_care_Banner-03.webp?v=1692257845&width=1200",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/mans_care_pack_for_improvement_in_mens_health.webp?v=1701846491&width=1200",
    },
  ];
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {BannersData.map((data) => (
          <img src={data.url} alt="img" width="100%" height="430px" />
        ))}
      </Carousel>
    </>
  );
}

export default Hero;
