import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const router = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
  },
  {
    path: "/products",
    element: <Products />,
    name: "Products",
  },
];
