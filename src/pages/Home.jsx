import InputForm from "../components/InputForm";
import MonthSelector from "../components/MonthSelector";

const Home = ({ addItem, items }) => {
  return (
    <div>
      <InputForm addItem={addItem} />
      <MonthSelector items={items} />
    </div>
  );
};

export default Home;
