import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Drsliders.css";
function Drsliders() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className=" container mt-4 mb-4">
        <Slider {...settings}>
          <div>
            <div className="Main-one ">
              <div className="left-info">
                <img
                  src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                  width="300px"
                  alt="Dr.ABC"
                />
              </div>
              <div>
                <div className="right-info">
                  <h4>Name of Doctor</h4>
                  <span className="one-info-box">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Main-one ">
              <div className="left-info">
                <img
                  src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                  width="300px"
                  alt="Dr.ABC"
                />
              </div>
              <div>
                <div className="right-info">
                  <h4>Name of Doctor</h4>
                  <span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Main-one ">
              <div className="left-info">
                <img
                  src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                  width="300px"
                  alt="Dr.ABC"
                />
              </div>
              <div>
                <div className="right-info">
                  <h4>Name of Doctor</h4>
                  <span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Main-one ">
              <div className="left-info">
                <img
                  src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                  width="300px"
                  alt="Dr.ABC"
                />
              </div>
              <div>
                <div className="right-info">
                  <h4>Name of Doctor</h4>
                  <span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aspernatur porro exercitationem molestiae! Laborum,
                      eligendi
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Drsliders;
