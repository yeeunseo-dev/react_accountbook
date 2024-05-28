import InputForm from "../components/InputForm";
import MonthSelector from "../components/MonthSelector";

const Home = ({ addItem, items }) => {
  return (
    <div>
      <h1>나만의 가계부</h1>
      <InputForm addItem={addItem} />
      <MonthSelector items={items} />
    </div>
  );
};

export default Home;
