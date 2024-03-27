import React, { useState } from "react";
import Demo02 from "./Demo02";
import Demo03 from "./Demo03";
function Demo() {
  const [demo, setDemo] = useState(false);

  const handelClick = () => {
    if (demo) {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem
          maxime excepturi officiis saepe vero dignissimos inventore, expedita
          incidunt quis quisquam suscipit. Temporibus mollitia, esse natus
          perferendis veniam harum vero?
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="container mb-4">
        <h5>Conditional Rendering Using If / Else And Ternary Operator...</h5>
        <div>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setDemo(!demo)}
          >
            Click Me
          </button>
        </div>
        <div className="mt-3">{handelClick()}</div>
      </div>
      <Demo02 />
      <Demo03 />
    </>
  );
}

export default Demo;
