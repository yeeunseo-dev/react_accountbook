import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = ({ items, updateItem, deleteItem }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const numericId = parseInt(id, 10);
  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const detailRef = useRef(null);
  const expenseRef = useRef(null);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteItem(item.id);
      navigate("/");
    }
  };

  const handleBack = () => {
    const selectedMonth = item.date.substring(5, 7) + "월";
    navigate(-1, { replace: true, state: { selectedMonth } });
  };

  const handleUpdate = () => {
    const newItem = {
      date: dateRef.current.value,
      category: categoryRef.current.value,
      detail: detailRef.current.value,
      expense: parseInt(expenseRef.current.value),
      id: item.id,
    };
    updateItem(newItem);
    const selectedMonth = newItem.date.substring(5, 7) + "월";
    navigate(-1, { replace: true });
  };

  // 현재 html의 정보를 알고 싶을 때 useRef사용

  return (
    <>
      <div className="container">
        <div>
          <div className="detail-label">날짜</div>
          <input
            className="input"
            type="text"
            defaultValue={item.date}
            ref={dateRef}
          />
          {/* defaultValue */}
        </div>
        <div>
          <div className="detail-label">항목</div>
          <input
            className="input"
            type="text"
            defaultValue={item.category}
            ref={categoryRef}
          />
        </div>
        <div>
          <div className="detail-label">내용</div>
          <input
            className="input"
            type="text"
            defaultValue={item.detail}
            ref={detailRef}
          />
        </div>
        <div>
          <div className="detail-label">금액</div>
          <input
            className="input"
            type="number"
            defaultValue={item.expense}
            ref={expenseRef}
          />
        </div>
      </div>
      <div className="wrapper">
        <button className="button main-button" onClick={handleUpdate}>
          수정
        </button>
        {/* onClick은 객체가 아닌 함수를 넣어서 {{}} 할 필요 없음*/}
        <button className="button delete-button" onClick={handleDelete}>
          삭제
        </button>
        <button className="button back-button" onClick={handleBack}>
          뒤로가기
        </button>
      </div>
    </>
  );
};

export default Detail;
