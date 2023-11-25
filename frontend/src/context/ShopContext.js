import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ShopContext = createContext({});

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://127.0.0.1:8000/api/read/carts"
  //       );
  //       setCartItems(response.data.data);
  //       console.log("shopping carts response.data", response.data.data);
  //     } catch {
  //       console.log("ShopContext.js error");
  //     }
  //   };
  //   fetchData();
  // }, []);
  // useEffect(()=>{
  //   console.log("ShopContext cartItems: ",cartItems,"cartItems.length: ",cartItems.length)
  // },[])
  //shopping cart offcanvas
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle form submit button on Cart offcanvas 
  const nav = useNavigate();
  const handleCartOffcanvas= ()=> {
    handleClose();
    nav("/shoppingcarts");
  }
  
  return (
    <ShopContext.Provider value={{ cartItems, setCartItems,show,setShow,handleClose,handleShow,handleCartOffcanvas }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
