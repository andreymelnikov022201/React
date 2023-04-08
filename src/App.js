import MainRouter from "./routes/mainRoute";
import { totalPlusContext } from "./totalPlus";
import styles from "./App.module.css";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/reducer";

const App = () => {
  const { totalPlus } = useContext(totalPlusContext);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>{counter.value}</p>

      <h2 className={styles.title}>total: {totalPlus}</h2>
      <MainRouter />
    </>
  );
};

export default App;
