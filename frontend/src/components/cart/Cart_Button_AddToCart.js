import React from "react";
import { Button } from "reactstrap";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import axios from "axios";

const Cart_Button_AddToCart = ({ productId = undefined }) => {
  const { cartItems, setCartItems,handleUpdateQuantity } = useContext(ShopContext);
  const findCartByID = () => {
    const result = cartItems.find(({ id }) => id == productId);
    console.log("findCartByID result: ", result);
    return result;
  };

  const getCartQuantities = () => {
    const res = cartItems.find((item) => item.id == productId
    );
    console.log(
      "Cart_Button_AddToCart getCartQuantities res: ",
      res,
      "productId: ",
      productId
    );
    return res.quantities;
  };

  const handleAddToCart = async () => {
    try {
      const url = "http://127.0.0.1:8000/api/create/carts";
      // const response = await axios.post(url,[{product_id}]);

      //handle cartItems
      if (findCartByID()) {
        // cartItems have item
        await handleUpdateQuantity(getCartQuantities()+1,productId);
        console.log("Cart_Button_AddToCart handleAddToCart cartItems:", cartItems);
      }
      // cartItems not have item yet
      else {
        console.log(
          "Cart_Button_AddToCart handleAddToCart else:",
          findCartByID()
        );
      }
    } catch (error) {
      console.log("there is something wrong, try again");
    }
  };



  return (
    <>
      <Button id="addtocartbtn" onClick={handleAddToCart}>
        <i class="bi-cart-fill me-1"></i>
        Add to cart
      </Button>
    </>
  );
};

export default Cart_Button_AddToCart;
