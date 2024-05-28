import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#ffffff",
          padding: "20px",
          margin: "20px 80px",
          borderRadius: "10px",
        }}
      >
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            style={{
              backgroundColor: selectedMonth === month ? "blue" : "gray",
              margin: "5px",
              padding: "10px",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {month}
          </button>
        ))}
      </div>

      <ul>
        {filteredItems.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "20px",
              margin: "10px 80px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <Link
              to={`/detail/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div style={{ marginBottom: "10px" }}>{item.date}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {item.category} - {item.detail}
                </div>
                <div>{item.expense} 원</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MonthSelector;
