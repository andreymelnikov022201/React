import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import MainRouter from "./routes/mainRoute";
import { useCallback, useState } from "react";
import { TotalplusContextProvider } from "./totalPlus";
import styles from "./App.module.css";


const App = () => {
  const [total, setTotal] = useState(0);
  
 

  const totalPlus = useCallback(() => {
    setTotal((prev) => ( prev + 1));
  },[setTotal]);

  const resetTotal = () => {
    setTotal({
      total: 0,
    });
  };

  

  
    return (
      <TotalplusContextProvider>
        <h2 className={styles.title}>total: {total}</h2>
        <MainRouter />
        </TotalplusContextProvider>
    );
  }

export default App;
