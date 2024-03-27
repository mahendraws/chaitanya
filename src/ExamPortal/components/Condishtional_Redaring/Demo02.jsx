import React, { useState } from "react";

function Demo02() {
  const [data, setData] = useState(false);

  console.log("Demo - 02 >>>>> ", data);

  return (
    <div>
      <div className="container">
        <div>
          <h4>Tannery Oparetor</h4>
        </div>

        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => {
            setData(!data);
          }}
        >
          Click Me
        </button>

        {data ? (
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil
            aspernatur incidunt labore voluptatem natus quaerat eveniet tempore
            excepturi perferendis laudantium, praesentium laboriosam cupiditate
            sint quae nesciunt asperiores esse! Ullam.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Demo02;
