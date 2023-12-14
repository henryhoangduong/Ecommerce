import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const ShopContext = createContext({});

export const ShopContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const [show, setShow] = React.useState(false);

  // handle form submit button on Cart offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nav = useNavigate();
  const handleCartOffcanvas = () => {
    handleClose();
    nav("/shoppingcarts");
  };
  const findCartId = (productId) =>{
    const {cart_id} = cartItems.find((item)=>item.id==productId);
    return cart_id;
  }



  //handle update quantity
  const handleUpdateQuantity = async (quantities,productId) => {
    try {
      const cart_id = findCartId(productId);
      // console.log("ShopContext handleUpdateQuantity cart_id: ",cart_id,"cartItems: ",cartItems,"productId: ",productId);
      const url = `http://127.0.0.1:8000/api/update/carts/${cart_id}`;
      // console.log("ShopContext handleUpdateQuantity cartUpdate quantities: ",quantities)
      const cartUpdate = cartItems.map((item)=>((item.id == productId)?{...item,quantities}: item));
      setCartItems(cartUpdate);
      // console.log("ShopContext handleUpdateQuantity cartItems: ",cartItems)
      const response = await axios.post(url, {quantities,product_id:productId});
    } catch (error) {
      console.log("Cart_Button_ChangeQuantity error");
    }
  };
  
  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        show,
        setShow,
        handleClose,
        handleShow,
        handleCartOffcanvas,
        handleUpdateQuantity,
        findCartId
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
