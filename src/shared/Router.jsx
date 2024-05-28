import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = ({ items, addItem, updateItem, deleteItem }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={items} addItem={addItem} />} />
        <Route
          path="/detail/:id"
          element={
            <Detail
              items={items}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
