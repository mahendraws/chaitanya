import React, { useState } from "react";
import Edit from "../../../assets/images/edit.png";
import Delete from "../../../assets/images/delete.png";
import Right from "../../../assets/images/right.png";
import Wrong from "../../../assets/images/x-mark.png";
import Style from "./Items.module.css";

function Items(props) {
  const [isEditing, setEditing] = useState(false);
  const [inpText, setInpText] = useState(props.item);

  const handleUpdate = () => {
    const updatedData = {
      index: props.index,
      prev: props.item,
      newv: inpText,
    };
    props.updateData(updatedData);
    setEditing(false);
  };

  return (
    <div className={Style.container}>
      {isEditing ? (
        <>
          <div className={Style.INPUTFILD}>
            <input
              type="text"
              value={inpText}
              onChange={(e) => setInpText(e.target.value)}
            />
          </div>

          <div className={Style.EditesBTN}>
            <div className="mt-2">
              <img src={Right} width="25px" alt="Right" />
            </div>

            <div className="mt-1">
              <button onClick={handleUpdate}>
                <img src={Wrong} alt="Wrong" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={Style.Items}>
            <p>{props.item}</p>
          </div>

          <div className={Style.BTN}>
            <button onClick={() => setEditing(true)}>
              <img src={Edit} alt="Edit" />
            </button>
            <button onClick={() => props.deleteData(props.item)}>
              <img src={Delete} alt="Delete" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;
