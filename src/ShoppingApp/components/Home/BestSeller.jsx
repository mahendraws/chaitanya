import React,{useContext,useState} from "react";
import styled from "styled-components";
import { Carousel } from "@trendyol-js/react-carousel";
import { ShopContext } from "../../contexts/shopContextProvider";
import "./BestSeller.css";
import Cart from "../Cart";
function BestSeller() {

  const {allProducts,addToCart,isLogin} = useContext(ShopContext)

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
          Best.. Selling range of ayurvedic products and medicine where ancient
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
          {allProducts.map((val,index) => {
            return (
                <Cart val={val} key={index}/>       
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
