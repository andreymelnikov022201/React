import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TotalplusContextProvider } from "./totalPlus";
import { ProductsContextProvider } from "./components/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TotalplusContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </TotalplusContextProvider>
  </React.StrictMode>
);
