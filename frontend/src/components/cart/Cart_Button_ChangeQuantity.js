import React from "react";


const Cart_Button_ChangeQuantity = () => {
  return (
    <>
      <button className="btn btn-primary px-3 me-2">
        <i className="fas fa-minus"></i>
      </button>

      <div className="form-outline">
        <input
          id="form1"
          min="0"
          name="quantity"
          value="1"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary px-3 ms-2">
        <i className="fas fa-plus"></i>
      </button>
    </>
  );
};

export default Cart_Button_ChangeQuantity;
