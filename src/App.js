import MainRouter from "./routes/mainRoute";
import { totalPlusContext } from "./totalPlus";
import styles from "./App.module.css";
import { useContext } from "react";

const App = () => {
  const { totalPlus } = useContext(totalPlusContext);

  return (
    <>
      <h2 className={styles.title}>total: {totalPlus}</h2>
      <MainRouter />
    </>
  );
};

export default App;
