import { Component, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { totalPlusContext } from "../totalPlus";
import { setActive } from "./Menu";
import styles from "./Product.module.css"
import { CSSTransition } from "react-transition-group";

const Product = ({toggleCount, product}) =>  {
  const {totalPlusChange} = useContext(totalPlusContext);
  useEffect(() => {
    totalPlusChange();
  }, [totalPlusChange])
  const ref = useRef(null);
    return (
      <CSSTransition
      in={true}
      nodeRef={ref}
      timeout={500}
      classNames={{
        enterActive: styles["product-enter"],
        enterDone: styles["product-enter-active"],
        exitActive: styles["product-exit-active"],
        exitDone: styles["product-exit"],
      }}
      >
     
      <li>
        <NavLink to = {`${product.id}`}style={setActive}>
          {product.name || "All"}
          </NavLink>
          <input type="checkbox" onChange={toggleCount}/>
      </li>
      </CSSTransition>
    );
  }

export default Product;
