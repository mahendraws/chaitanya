import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { ShopContext } from "../../contexts/shopContextProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from "react-star-rating-lite";
import Benefits from "./Benefits";
import Ingredients from "./Ingredients";
import HowToUseSection from "./HowToUseSection";
import ProductDetails from "./ProductDetails";
import "./style.css";

import { useParams } from "react-router-dom";

import minus from "../../assets/images/minus.png";
import add from "../../assets/images/plus.png";

function ProductPage() {
  const navigate = useNavigate();

  const sProduct = useParams();
  let currentProduct = Number(sProduct.id) - 1;
  // const currentProduct = props.productId;
  // console.log(currentProduct);
  const { allProducts, addToCart, isLogin } = useContext(ShopContext);
  const [num, SetNum] = useState(1);
  const incriment = () => {
    SetNum(num + 1);
  };
  const decriment = () => {
    if (num > 1) {
      SetNum(num - 1);
    }
  };

  const addCart = (id, quantity) => {
    if (!isLogin) {
      navigate("/Login");
    } else {
      addToCart(id, quantity);
    }
  };

  return (
    <>
      <div className="container main-comtainer">
        <div class="carousel-wrapper main2-Container ">
          <div>
            <Carousel>
              <div>
                <img
                  src={allProducts[currentProduct].productImages[0]}
                  alt=""
                />
              </div>

              <div>
                <img
                  src={allProducts[currentProduct].productImages[0]}
                  alt=""
                />
              </div>

              <div>
                <img
                  src={allProducts[currentProduct].productImages[0]}
                  alt=""
                />
              </div>

              <div>
                <img
                  src={allProducts[currentProduct].productImages[0]}
                  alt=""
                />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="rightMenu">
          <h2>{allProducts[currentProduct].title}</h2>
          <p>
            <span style={{ fontWeight: "700", fontSize: "20px" }}>
              ₹{allProducts[currentProduct].price}
            </span>

            <span style={{ fontWeight: "700", fontSize: "15px" }}>
              <s className="mx-2" style={{ color: "gray" }}>
                ₹{allProducts[currentProduct].regularPrice}
              </s>
            </span>
            <span className="mx-2">Tax included. Shipping Free.</span>

            <div className="d-flex">
              <div>
                <Rating value="5" weight="18" className="m-3" />
              </div>
              <div className="mx-1">
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  <Link to="/WriteReviews"> ( 1 TOTAL REVIEWS )</Link>
                </span>
              </div>
            </div>
          </p>
          <h3>{allProducts[currentProduct].benifitSection[0].title}</h3>
          <div></div>
          <ul>
            <li>{allProducts[currentProduct].benifitSection[0].desc}</li>
            <li>{allProducts[currentProduct].benifitSection[1].desc}</li>
            <li>{allProducts[currentProduct].benifitSection[2].desc}</li>
            <li>{allProducts[currentProduct].benifitSection[3].desc}</li>
          </ul>
          <div>
            <span> Size:</span>
            <div className="PackeCartMain">
              {allProducts[currentProduct].size.map((item) => {
                return (
                  <>
                    <div className=" mt-2 PackeCart mx-2 mb-3 mt-3">
                      <div className="Items">
                        <div className="Heading-Text">
                          <p>PACK OF 1</p>
                        </div>
                        {/* <div>
                        <p>Save 200</p>
                      </div> */}
                        <div className="Price-text">
                          <p> ₹{item.price}</p>
                        </div>
                        <div className="Price-text2">
                          <p>
                            <s> ₹{item.regularPrice}</s>
                          </p>
                        </div>
                        <div className="Price-text3">
                          <p>{item.quantity}</p>
                        </div>
                        <div className="Best-Sell">
                          <p>Best Seller</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <p style={{ color: "gray" }}>QUANTITY</p>
            <div className="ProductRange">
              <div>
                <img
                  onClick={decriment}
                  src={minus}
                  alt=""
                  width="18px"
                  style={{ marginTop: "10px", cursor: "pointer" }}
                />
              </div>
              <div>
                <span>{num}</span>
              </div>
              <div>
                <img
                  onClick={incriment}
                  src={add}
                  alt=""
                  width="18px"
                  style={{ marginTop: "10px", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div className="Bynow-btn">
            <div>
              <button
                onClick={() => {
                  addCart(allProducts[currentProduct].productId, num);
                }}
              >
                ADD TO CART
              </button>
            </div>
            <div className="Bynow-btn2">
              <Link to="/CheckoutMain">
                <button>BUY IT NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section Start */}
      <div className="container">
        <div className="text-center mt-4 mb-4">
          <h2
            style={{
              color: "rgb(5, 95, 5)",
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            Kabj Hari - Benefits
          </h2>
        </div>
        <div>
          <div class="card-group ">
            <Benefits
              bebefits="Card title"
              imgurl="https://www.shrichyawanayurved.com/cdn/shop/files/Benefits_and_Ingredients-02_80e14ed7-bfbd-4ba7-950c-0ea11b89e37a.webp?v=1680317735&width=500"
            />
  
   
       
          </div>
        </div>
      </div>
      {/* Benefits Section End */}

      {/* Ingredients   Section start */}
      <div className="container">
        <div className="text-center mt-4 mb-4">
          <h2
            style={{
              color: "rgb(5, 95, 5)",
              fontSize: "32px",
              fontWeight: "600",
              marginTop: "50px",
            }}
          >
            Ingredients - Thyroid Care Capsule
          </h2>
        </div>
        <div>
          <div class="card-group ">
            <Ingredients
              heading="Nigella Sativa"
              imgurl="https://www.shrichyawanayurved.com/cdn/shop/files/Benefits_and_Ingredients-02_80e14ed7-bfbd-4ba7-950c-0ea11b89e37a.webp?v=1680317735&width=500"
              info="Aids in improving Thyroid status"
            />

          </div>
        </div>
      </div>
      {/* Ingredients  Section End */}

      {/* How to use Section Start */}
      <div className="container MainContainer">
        <h2
          className="mt-4 mb-4 text-center"
          style={{
            color: "rgb(5, 95, 5)",
            fontSize: "32px",
            fontWeight: "600",
            marginTop: "50px",
          }}
        >
          How to use
        </h2>
        <div class="card-group">
		
          <HowToUseSection
            num="1"
            imgurl="https://www.shrichyawanayurved.com/cdn/shop/files/thyroid_care_capsule-25.webp?v=1694602199&width=500"
            title="Thyroid Care Capsule"
          />
    
          
        </div>
      </div>
      {/* How to use Section End */}

      {/* Product Details section Start */}
      <div className="container mt-4 ProductsBox">
        <div>
          <h2
            className="mt-4 mb-4 text-center"
            style={{
              color: "rgb(5, 95, 5)",
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            Product Details
          </h2>
        </div>
        <ProductDetails
          ProductDescription="Product Description"
          info1="In quest to provide an ayurvedic thyroid
            cure Shri Chyawan Ayurveda has formulated a Thyroid Care Capsule. It
            helps to regulate and maintain optimum Thyroid levels and ideal body
            weight."
          Ingredients="Ingredients"
          info2="It contains ingredients like Trigonella Foenum,
          Nigella Saliva, Trachyspermum Ammi, Boerhaavia Diffuse, Tribulus
          Terrestris, Solanum Nignum, Withania Somnifera, Zizyphus Spinosa
          Seed, Juglans Nigra, Coelus Forskohlu."
        />
      </div>
      {/* Product Details section End */}

      {/* Talk to our Expert section start */}
      <div>
        <div className="main-Container">
          <div className="left-Box">
            <h2
              className="mt-4 mb-4"
              style={{
                color: "rgb(5, 95, 5)",
                fontSize: "36px",
                fontWeight: "600",
              }}
            >
              Talk to our Expert
            </h2>
            <p style={{ fontSize: "25px" }}>
              Our trusted Experts can help you choose the right
            </p>
            <p style={{ fontSize: "25px" }}>products for your health.</p>
            <button className="BTN">+91 0000000000</button>
          </div>
          <div className="Right-box">
            <img
              src="https://www.shrichyawanayurved.com/cdn/shop/files/take-consultation.jpg?v=1677910640"
              alt=""
              width="500px"
            />
          </div>
        </div>
      </div>
      {/* Talk to our Expert section End */}

      {/* Reviews Components start here */}

      {/* Reviews Components End here */}
    </>
  );
}

export default ProductPage;
