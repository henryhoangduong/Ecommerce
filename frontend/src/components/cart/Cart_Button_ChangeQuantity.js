import React from "react";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import axios from "axios";


const Cart_Button_ChangeQuantity = ({ productCart }) => {
  const { cartItems, setCartItems } = useContext(ShopContext);
  const handleUpdateQuantity = async (quantities) => {
    try {


      // cartUpdate algorigthm
      const cartUpdateObject = cartItems.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});
      cartUpdateObject[productCart.id] = { ...productCart, quantities };

      const cartUpdate = Object.values(cartUpdateObject);
      setCartItems(cartUpdate);

      const url = `http://127.0.0.1:8000/api/update/carts/${productCart.id}`;
      const response = await axios.post(url, {quantities});
    } catch (error) {
      console.log("Cart_Button_ChangeQuantity error");
    }
  };
  const QuantitiesOption = [];
  for (let i=1; i<=10;i++){
    QuantitiesOption.push(i);
  }


  return (
    <>

      <select
        name="quantities"
        className={"form-select"}
        id="quantities"
        onChange={(e) => handleUpdateQuantity(e.target.value)}
        value={productCart.quantities}
      >

        {QuantitiesOption.map((num) => productCart.quantities===num?(
          <option key={num} value={num} selected>
            {num}
          </option>
        ):(
          <option key={num} value={num} >
          {num}
        </option>
        ))}


      </select>


    </>
  );
};

export default Cart_Button_ChangeQuantity;
