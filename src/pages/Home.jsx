import React, { useState } from "react";

const Home = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [expense, setExpense] = useState("");
  const [detail, setDetail] = useState("");

  // 넷 다 입력되지 않으면 alert: 전체를 입력해주세요!

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

  return (
    <div>
      <h1>홈</h1>
      {/* <지출을 등록하는 컴포넌트 /> */}
      <div
        style={{
          background: "beige",
          padding: "20px",
          margin: "0px 80px",
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
              onClick={""}
            >
              등록
            </button>
          </span>
        </div>
      </div>
      {/* <월 선택 컴포넌트 /> */}
      {/* <지출을 리스팅해서 뿌리는 컴포넌트 /> */}
    </div>
  );
};

export default Home;
