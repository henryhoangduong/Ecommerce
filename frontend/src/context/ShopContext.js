import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ShopContext = createContext({});

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/read/carts"
        );
        setCartItems(response.data.data);
        console.log("shopping carts response.data", response.data.data);
      } catch {
        console.log("ShopContext.js error");
      }
    };
    fetchData();
  }, []);
  //shopping cart offcanvas
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ShopContext.Provider value={{ cartItems, setCartItems,show,setShow,handleClose,handleShow }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
