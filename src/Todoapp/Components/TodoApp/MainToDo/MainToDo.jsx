import React from "react";

// This is css file
import Style from "./MainToDo.module.css";
// import Home from "../../Home/Home";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoItems from "../ToDoItems/ToDoItems";

function MainToDo(props) {
  return (
    <>
      <div className={Style.MainContainer01}>
        <div className={Style.MainContainer02}>
          <div className={Style.container}>
            <span className="">Add Task</span>

            <ToDoInput addData={props.addData} />
            <ToDoItems
              data={props.data}
              deleteData={props.deleteData}
              isEditing={props.isEditing}
              setEditing={props.setEditing}
              updateData={props.updateData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainToDo;
