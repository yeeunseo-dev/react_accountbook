import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useItems } from "../contexts/ItemContext";
import styled from "styled-components";

const MonthSelector = () => {
  const { items } = useItems();
  const location = useLocation();

  const initialMonth = localStorage.getItem("selectedMonth") || "전체";

  const [selectedMonth, setSelectedMonth] = useState(() => initialMonth);

  useEffect(() => {
    localStorage.setItem("selectedMonth", selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  // 월별 선택
  const filteredItems = items.filter((item) => {
    if (!selectedMonth || selectedMonth === "전체") return true;
    const itemMonth = parseInt(item.date.substring(5, 7), 10) - 1; // 월은 0부터 시작하므로, 1을 빼줌
    return months[itemMonth] === selectedMonth;
  });

  return (
    <>
      <div className="container">
        {months.map((month) => (
          <button
            className="month-button"
            key={month}
            onClick={() => setSelectedMonth(month)}
            style={
              selectedMonth === month
                ? { backgroundColor: "#01BFA7", color: "white" }
                : {}
            }
          >
            {month}
          </button>
        ))}
        <button
          className="month-button"
          onClick={() => setSelectedMonth("전체")}
          key={"all"}
          style={
            selectedMonth === "전체"
              ? { backgroundColor: "#01BFA7", color: "white" }
              : {}
          }
        >
          전체
        </button>
      </div>

      <ul>
        {filteredItems.map((item) => (
          <Link className="list" key={item.id} to={`/detail/${item.id}`}>
            <div className="label">{item.date}</div>
            <div className="main-text">
              <div className="label">{item.category}</div> {item.detail}
            </div>
            <div>
              <span className="highlight-text">{item.expense}</span>
              <span className="label">원</span>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MonthSelector;
