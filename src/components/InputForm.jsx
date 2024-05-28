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
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <span className="label">날짜</span> */}
          <input
            className="input"
            type="text"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={dateHandler}
          />

          {/* <ul
            name="항목"
            className="input"
            placeholder="카테고리를 입력해주세요"
            value={category}
            onChange={categoryHandler}
          >
            카테고리를 입력해주세요
            {/* <li style={{ color: "#999999" }} value="">
              카테고리를 입력해주세요
            </li> */}
          {/* <li>
              <button>식비 🍚</button>
            </li>
            <li>
              <button>생활 💳</button>
            </li>
            <li>
              <button>교통 🚗</button>
            </li>
            <li>
              <button>쇼핑 🛍️</button>
            </li>
            <li>
              <button>금융 💸</button>
            </li>
            <li>
              <button>기타 🎸</button>
            </li>
          </ul> */}
          <input
            aria-label="항목"
            className="input"
            type="text"
            placeholder="카테고리를 입력해주세요"
            value={category}
            onChange={categoryHandler}
          />

          <input
            className="input"
            type="text"
            placeholder="세부내용을 입력해주세요"
            value={detail}
            onChange={detailHandler}
          />

          <input
            className="input"
            type="number"
            placeholder="금액을 입력해주세요"
            value={expense}
            onChange={expenseHandler}
          />

          <span>
            <button className="button main-button" onClick={handleSubmit}>
              저장
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default InputForm;
