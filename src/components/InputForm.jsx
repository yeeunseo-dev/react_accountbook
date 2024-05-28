import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//입력 폼
const InputForm = ({ addItem }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [expense, setExpense] = useState("");
  const [detail, setDetail] = useState("");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const expenseHandler = (e) => {
    setExpense(e.target.value);
  };

  const detailHandler = (e) => {
    setDetail(e.target.value);
  };

  // 등록 시 리스팅, alert
  const handleSubmit = () => {
    if (!date || !category || !expense || !detail) {
      alert("전체를 입력해주세요");
    } else {
      const newItem = {
        id: uuidv4(),
        date,
        category,
        expense,
        detail,
      };
      addItem([...items, newItem]);

      setDate("");
      setCategory("");
      setExpense("");
      setDetail("");
    }
  };

  return (
    <>
      {/* <지출을 등록하는 컴포넌트 /> */}
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          margin: "20px 80px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "0px 10px",
            }}
          >
            <span style={{ margin: "0px 8px" }}>날짜</span>
            <input
              style={{ width: "160px" }}
              type="date"
              placeholder="YYYY-MM-DD"
              value={date}
              onChange={dateHandler}
            />
          </div>
          <div
            style={{
              padding: "0px 10px",
            }}
          >
            <span style={{ margin: "0px 8px" }}>항목</span>
            <input
              style={{ width: "160px" }}
              type="text"
              placeholder="카테고리를 입력해주세요"
              value={category}
              onChange={categoryHandler}
            />
          </div>
          <div
            style={{
              padding: "0px 10px",
            }}
          >
            <span style={{ margin: "0px 8px" }}>금액</span>
            <input
              style={{ width: "160px" }}
              type="number"
              placeholder="금액을 입력해주세요"
              value={expense}
              onChange={expenseHandler}
            />
          </div>
          <div
            style={{
              padding: "0px 10px",
            }}
          >
            <span style={{ margin: "0px 8px" }}>내용</span>
            <input
              style={{ width: "160px" }}
              type="text"
              placeholder="세부내용을 입력해주세요"
              value={detail}
              onChange={detailHandler}
            />
          </div>
          <span>
            <button
              style={{
                marginLeft: "20px",
              }}
              onClick={handleSubmit}
            >
              저장
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default InputForm;
