import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = ({ items, updateItem, deleteItem }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const detailRef = useRef(null);
  const expenseRef = useRef(null);
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleDelete = () => {
    deleteItem(item.id);
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdate = () => {
    const newItem = {
      date: dateRef.current.value,
      category: categoryRef.current.value,
      detail: detailRef.current.value,
      expense: expenseRef.current.value,
      id: item.id,
    };
    updateItem(newItem);
    navigate(-1);
  };

  // 현재 html의 정보를 알고 싶을 때 useRef사용

  return (
    <div className="container">
      <div>
        <span className="label">날짜</span>
        <br />
        <input
          className="input"
          type="text"
          defaultValue={item.date}
          ref={dateRef}
        />
        {/* defaultValue */}
      </div>
      <div>
        <span className="label">항목</span>
        <br />
        <input
          className="input"
          type="text"
          defaultValue={item.category}
          ref={categoryRef}
        />
      </div>
      <div>
        <span className="label">내용</span>
        <br />
        <input
          className="input"
          type="text"
          defaultValue={item.detail}
          ref={detailRef}
        />
      </div>
      <div>
        <span className="label">금액</span>
        <br />
        <input
          className="input"
          type="text"
          defaultValue={item.expense}
          ref={expenseRef}
        />
      </div>
      <div>
        <button className="main-button" onClick={handleUpdate}>
          수정
        </button>
        {/* onClick은 객체가 아닌 함수를 넣어서 {{}} 할 필요 없음*/}
        <button className="main-button" onClick={handleDelete}>
          삭제
        </button>
        <button className="main-button" onClick={handleBack}>
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default Detail;
