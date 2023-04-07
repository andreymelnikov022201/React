import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import useCount from "../hooks/useCount";
import useMessage from "../hooks/useMessage";
import Product from "./Product";
import Title from "./Title";
export const products = [
{ "id": 1, "name": "parrot", "categoryId": 1 },
{ "id": 2, "name": "dog", "categoryId": 2 },
{ "id": 3, "name": "cat", "categoryId": 3 },
{ "id": 4, "name": "hamster", "categoryId": 5 },
{ "id": 5, "name": "goldfish", "categoryId": 4 },
{ "id": 6, "name": "snake", "categoryId": 5 },
{ "id": 7, "name": "turtle", "categoryId": 5 },
{ "id": 8, "name": "rabbit", "categoryId": 5 },
{ "id": 9, "name": "gerbil", "categoryId": 5 },
{ "id": 10, "name": "parakeet", "categoryId": 1 },
{ "id": 11, "name": "guinea pig", "categoryId": 5}];
export const categories = [
{"id":1, "name": "birds"},
{"id":2, "name": "dogs"},
{"id":3, "name": "cats"},
{"id":4, "name": "fishes"},
{"id":5, "name": "other animals"}];



const Products = ({totalPlus}) => {
  const location = useLocation();
  const { animalId, productId } = useParams();
  const [count, toggleCount] = useCount();
  const [showProduct,setShowProduct] = useState(null);
  

  

  const setProduct = (product) => {
    setShowProduct( product );
  };

  

  
  const [history, setHistory] = useState("");
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
                toggleCount ={toggleCount}
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
  }

export default Products;
