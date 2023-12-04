import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Header from "../../layouts/Header";
import Button from "react-bootstrap/Button";
import Footer from "../../layouts/Footer";
import "./Productdetail.css";
import Cart_Button_AddToCart from "../../components/cart/Cart_Button_AddToCart.js";
import { useState } from "react";

function Productdetail() {
  const [quantities,setQuantities] = useState(1);
  const { id } = useParams();
  console.log(id);
  const { loading, error, productsList } = useFetch(
    `http://127.0.0.1:8000/api/read/products/${id}`
  );
  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;

  const QuantitiesOption = [];
  for (let i = 1; i <= 10; i++) {
    QuantitiesOption.push(i);
  }
  
  return (
    <>
      <Header></Header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src={productsList.image_url}
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="small mb-1">SKU: BST-498</div>
              <h1 class="display-10  fw-bolder">{productsList.name}</h1>
              <div class="fs-5 mb-5">
                <span>${productsList.price}</span>
              </div>
              <p class="lead">{productsList.description}</p>
              <div class="d-flex">
                <select
                  name="quantities"
                  className={"form-select mx-3"}
                  style={{"maxWidth":"80px"}}
                  id="quantities"
                  onChange={(e) =>
                    setQuantities(
                      parseInt(e.target.value)
                    )
                  }
                  value={quantities}
                >
                  {QuantitiesOption.map((num) =>
                    quantities === 1 ? (
                      <option key={num} value={num} selected>
                        {num}
                      </option>
                    ) : (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    )
                  )}
                </select>
                {}
                <Cart_Button_AddToCart productId={id} quantities={quantities}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Productdetail;
