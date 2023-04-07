import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products, { products } from "../components/Products";
import Root from "../components/Root";
import PageNotFound from "../components/PageNotFound";
import ProductDetails from "../components/ProductDetails";
import AdminPanel from "../components/AdminPanel";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "animal/:animalId/",
        element: <Products />,
        children: [
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
      { path: "admin", element: <AdminPanel /> },
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export const setActive = ({ isActive }) =>
  isActive ? { color: "coral" } : { color: "white" };

export default MainRouter;
