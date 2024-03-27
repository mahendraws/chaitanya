import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

import MainToDo from "./Components/TodoApp/MainToDo/MainToDo";

import Carousel from "./Components/Carousel/Carousel";
import InfoForm from "./Components/InfoFrom/InfoForm";

import Nopage from "./Components/Nopage/Nopage";

function App(value) {
  const [data, setData] = useState([]);

  // This is for edite data in the todo items..1
  const [isEditing, setEditing] = useState(false);

  const addData = (item) => {
    // alert(item);
    setData([...data, item]);
  };

  const deleteData = (value) => {
    // alert(value);
    const newData = data.filter((item) => item !== value);
    setData(newData);
  };

  const updateData = () => {
    let newData = data.map((item, i) => {
      if (i === value.index) {
        return value.newv;
      } else {
        return item;
      }
    });
    console.log(newData);
    setData(newData);
  };

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <MainToDo
                data={data}
                addData={addData}
                deleteData={deleteData}
                isEditing={isEditing}
                setEditing={setEditing}
                updateData={updateData}
              />
            }
          />

          <Route path="/Carousel" element={<Carousel />} />
          {/* <Route path="/Home" element={<Home />} />
          <Route path="/AboutInfo" element={<AboutInfo />} /> */}
          <Route
            path="/MainToDo"
            element={
              <MainToDo
                data={data}
                addData={addData}
                deleteData={deleteData}
                isEditing={isEditing}
                setEditing={setEditing}
                updateData={updateData}
              />
            }
          />
          <Route path="/InfoForm" element={<InfoForm />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
