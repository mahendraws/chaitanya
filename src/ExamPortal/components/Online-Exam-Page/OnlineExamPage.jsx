import React, { useState } from "react";
import Demo from "../Condishtional_Redaring/Demo";
import "./Style.css";
import Data from "../Data.json";

import left from "../../assets/images/back.png";
import right from "../../assets/images/next.png";
function OnlineExamPage() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {/* {Data.map((val, index) => {
        return (
          <>
            <h5>
              {index + 1}) {val.question}
            </h5>
            <h5>{val.option1}</h5>
            <h5>{val.option2}</h5>
            <h5>{val.option3}</h5>
            <h5>{val.option4}</h5>
          </>
        );
      })} */}

      {/* <div className="Container">
        <div className="Left-Box">
          <div className="left-Text">
            <h4>
              {[0] + 1}) {Data[1].question}
            </h4>
            <div>
              <input
                className="mx-2 mb-3 mt-3"
                type="radio"
                id="Option1"
                name="Options"
                value="HTML"
              />
              <label for="Option1"> {Data[0].option1}</label>
            </div>
            <div>
              <input
                className="mx-2 mb-3 "
                type="radio"
                id="option2"
                name="Options"
                value="HTML"
              />
              <label for="option2"> {Data[0].option2}</label>
            </div>
            <div>
              <input
                className="mx-2 mb-3"
                type="radio"
                id="option3"
                name="Options"
                value="HTML"
              />
              <label for="option3">{Data[0].option3}</label>
            </div>
            <div>
              <input
                className="mx-2"
                type="radio"
                id="option4"
                name="Options"
                value="HTML"
              />

              <label for="option4">{Data[0].option4}</label>
            </div>

            <div className="BTN">
              <div>
                <button>
                  <img className="mx-2" src={left} alt="" width="20px" />{" "}
                  Previous
                </button>
              </div>
              <div>
                <button>Submit</button>
              </div>
              <div>
                <button>
                  Next <img className="mx-2" src={right} alt="" width="20px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Right-Box">
          <div>
            Queastions {Data[0].id} of {Data.length}
          </div>
          {Data.map((index) => {
            return (
              <>
                <button className="mx-1 mt-3 ">{index.id}</button>
              </>
            );
          })}
          <div className="CountQue">
            <div>
              Correct : <span className="C-Scoure">{Data[0].id}</span>
            </div>

            <div className="mx-3">
              Incorrect : <span className="In-Scoure">{Data[0].id}</span>
            </div>
          </div>
        </div>
      </div> */}

      <Demo />
    </div>
  );
}

export default OnlineExamPage;
