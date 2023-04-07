import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import useCount from "../hooks/useCount";
import Product from "./Product";
import Title from "./Title";
import { ProductsContext } from "./ProductContext";

export const categories = [
  { id: 1, name: "birds" },
  { id: 2, name: "dogs" },
  { id: 3, name: "cats" },
  { id: 4, name: "fishes" },
  { id: 5, name: "other animals" },
];

const Products = () => {
  const location = useLocation();
  const { animalId, productId } = useParams();
  const [count, toggleCount] = useCount();
  const [history, setHistory] = useState("");
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    setHistory((prev) => `${prev} ${location.pathname}`);
  }, [animalId, productId]);

  return (
    <>
      <h2>{history}</h2>
      <Title />

      <div>{count}</div>
      <TransitionGroup>
        <ul>
          {products
            .filter((product) => {
              return animalId !== undefined && +animalId !== 0
                ? product.categoryId === +animalId
                : true;
            })
            .map((product) => (
              <Product
                key={product.id}
                toggleCount={toggleCount}
                product={product}
              >
                {product.name}
              </Product>
            ))}
        </ul>
      </TransitionGroup>

      <Outlet />
    </>
  );
};

export default Products;
