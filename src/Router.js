import {
  createBrowserRouter,
} from "react-router-dom";
import Products from "./components/products";
import Product from "./components/product";
import Cart from "./components/cart";
import ProductsInCategory from './components/productsInCategory'
import Favorite from "./components/favourite";
import Authorization from "./auth/authForm";

export default createBrowserRouter([
  {
    path: "/",
    element: <Products/>,
  },
  {
    path: "/products/",
    element: <Products/>,
  },
  {
    path: "/products/:id",
    element: <Product/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/favorite",
    element:<Favorite/>
  },
  {
    path: "/authorithation",
    element:<Authorization/>
  },
  {
    path: "/products/category/:cat",
    element: <ProductsInCategory/>
  },
 
]);
