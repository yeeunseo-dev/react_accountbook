import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styled-component
const MonthSelector = ({ items }) => {
  const getInitialMonth = () => {
    const savedMonth = localStorage.getItem("selectedMonth");
    return savedMonth ? savedMonth : "";
  };

  const [selectedMonth, setSelectedMonth] = useState(getInitialMonth);

  useEffect(() => {
    localStorage.setItem("selectedMonth", selectedMonth);
  }, [selectedMonth]);

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
    if (!selectedMonth) return true;
    const itemMonth = parseInt(item.date.substring(5, 7), 10) - 1; // 월은 0부터 시작하므로, 1을 빼줌 //이해 불가
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
            selected={selectedMonth === month}
          >
            {month}
          </button>
        ))}
        <button className="month-button" onClick={() => setSelectedMonth("")}>
          전체
        </button>
      </div>

      <ul>
        {filteredItems.map((item) => (
          <Link className="list" key={item.id} to={`/detail/${item.id}`}>
            <div className="label">{item.date}</div>
            <div className="main-text">
              {item.category} / {item.detail}
            </div>
            <div>
              <span className="highlight-text">{item.expense}</span> 원
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MonthSelector;
