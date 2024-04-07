import React from "react";
import "./Aboutus.css";
import ReviewSliders from '../Home/ReviewSliders/ReviewSliders'
function Aboutus() {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="mt-3 mb-3 container main-about">
              <div>
                <div>
                  <h3 className="text-center text-success">About Us</h3>
                </div>
                <hr />
                <div>
                  <div className="text-center mt-3 mb-3">
                    <div>
                      <h3 className="text-center mt-3 mb-3">
                        CHAITANYA NATURAL
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3 mb-3 ">
                    <div>
                      <p>
                        To achieve the purpose, which is Dharma, Artha, Kama &
                        Moksha, one should concentrate on having a long life.
                        Vidheya or Obedience is the most important quality one
                        must possess if one desires to learn the science of
                        Ayurveda, which explains how to achieve this purpose.
                      </p>
                    </div>
                    <div>
                      <p>
                        To achieve the purpose, which is Dharma, Artha, Kama &
                        Moksha, one should concentrate on having a long life.
                        Vidheya or Obedience is the most important quality one
                        must possess if one desires to learn the science of
                        Ayurveda, which explains how to achieve this purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<ReviewSliders/>

          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
