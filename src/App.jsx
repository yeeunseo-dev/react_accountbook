import React, { useState } from "react";
import Router from "./shared/Router";
import GlobalStyle from "./components/GlobalStyle";

const initialState = [
  {
    id: 1,
    date: "2024-05-23",
    category: "식비",
    detail: "점심식사",
    expense: 12000,
  },
  {
    id: 2,
    date: "2024-01-12",
    category: "쇼핑",
    detail: "봄옷 쇼핑",
    expense: 54000,
  },
];

const App = () => {
  const [items, setItems] = useState(initialState);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (updatedItem) => {
    console.log(updatedItem);
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <GlobalStyle />
      <Router
        items={items}
        addItem={addItem}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
