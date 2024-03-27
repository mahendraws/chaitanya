import React from "react";
import styled from "styled-components";
import { Carousel } from "@trendyol-js/react-carousel";
import "./BestSeller.css";
function BestSeller() {
  const allimags = [
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
    {
      url: "https://www.shrichyawanayurved.com/cdn/shop/files/shilajitvatiforstaminaenhancement.webp?v=1701926121&width=280",
    },
  ];
  return (
    <div className="container">
      <Container>
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
          Best Selling range of ayurvedic products and medicine where ancient
          wisdom meets modern wellness. Each product is meticulously crafted
          using Ayurveda principles for purity, potency and effectiveness. Our
          ayurvedic medicine online x store has rejuvenating supplements to
          luxurious skincare elixirs, we've selected time-tested remedies.
        </p>

        {/* <Carousel itemCountPerPanel={3}>
          {allimags.map((val) => (
            <Item>{val.url}</Item>
          ))}
        </Carousel>
      </Container> */}

        <Carousel show={3.5} slide={3} swiping={true}>
          {allimags.map((val) => {
            return (
              <>
                <div
                  className="card-group"
                  style={{ width: "20rem", cursor: "pointer" }}
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={val.url} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h6s className=" text-center mb-2  ">
                        <b> Pedego velid</b>
                      </h6s>
                      <div className="  text-center ">
                        <div className="card-text mb-2">
                          From ₹ 239
                          <span style={{ color: "gray" }}>
                            <s> ₹ 249</s>
                          </span>
                          <span className="offertext"> SAVE 11%</span>
                        </div>
                        <div className="card-text Addtocart">
                          <button> Add To Cart </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
`;
const Item = styled.div`
  background: #dbe4ff;
  text-align: center;
  font-size: 2rem;
  line-height: 145px;

  height: 250px;
  border-radius: 10px;
`;

export default BestSeller;
