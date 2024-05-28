import React, { useState } from "react";
import Router from "./shared/Router";
import GlobalStyle from "./components/GlobalStyle";
import { ItemProvider } from "./contexts/ItemContext";

const initialState = [
  {
    id: 1,
    date: "2024-05-23",
    category: "식비 🍚",
    detail: "점심식사",
    expense: 12000,
  },
  {
    id: 2,
    date: "2024-01-12",
    category: "쇼핑 🛍️",
    detail: "봄옷 쇼핑",
    expense: 54000,
  },
  {
    id: 3,
    date: "2024-02-08",
    category: "쇼핑 🛍️",
    detail: "고양이 간식",
    expense: 14800,
  },
  {
    id: 4,
    date: "2023-08-30",
    category: "교통 🚗",
    detail: "기차표 예매",
    expense: 48000,
  },
  {
    id: 5,
    date: "2023-06-27",
    category: "식비 🍚",
    detail: "고등 동창모임",
    expense: 28900,
  },
];

const App = () => {
  return (
    <>
      <ItemProvider>
        <div>
          <GlobalStyle />
          <Router />
        </div>
      </ItemProvider>
    </>
  );
};

export default App;
