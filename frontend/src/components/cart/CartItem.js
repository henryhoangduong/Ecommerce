import React from "react";

const CartItem = ({ item }) => {
  return (

    <div className="row mt-4">
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <div data-mdb-ripple-color="light">
          <img
            src={item.image_url}
            className="w-100"
            alt={item.name}
          />
          <a href="#!">
            <div
              className="mask"
              style={{
                backgroundcolor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        <p>
          <strong>{item.name}</strong>
        </p>

        <button
          type="button"
          className="btn btn-primary btn-sm me-1 mb-2"
          data-mdb-toggle="tooltip"
          title="Remove item"
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm mb-2"
          data-mdb-toggle="tooltip"
          title="Move to the wish list"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="d-flex mb-4" style={{ maxwidth: "300px" }}>
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
        </div>

        <p className="text-start text-md-center">
          <strong>{item.price} vnd</strong>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
