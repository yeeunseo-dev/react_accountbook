import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useItems } from "../contexts/ItemContext";

//입력 폼
const InputForm = () => {
  const { addItem } = useItems();
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

  // 날짜 형식 검사 함수 (YYYY-MM-DD)
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  // 등록 시 리스팅, alert
  const handleSubmit = () => {
    if (!date || !category || !expense || !detail) {
      alert("전체를 입력해주세요");
    } else if (!isValidDate(date)) {
      alert("유효한 날짜를 입력해주세요 (YYYY-MM-DD 형식)");
    } else {
      const newItem = {
        id: uuidv4(),
        date,
        category,
        expense,
        detail,
      };
      addItem(newItem);

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
          <input
            className="input"
            type="date"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={dateHandler}
          />

          <input
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
