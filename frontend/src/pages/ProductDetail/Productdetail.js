import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Header from "../../layouts/Header";
import Button from "react-bootstrap/Button";
import Footer from "../../layouts/Footer";
import "./Productdetail.css";
import Cart_Button_AddToCart  from "../../components/cart/Cart_Button_AddToCart.js";

function Productdetail() {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useFetch(
    `http://127.0.0.1:8000/api/read/products/${id}`
  );
  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;
  return (
    <>
      <Header></Header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src={data.image_url}
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="small mb-1">SKU: BST-498</div>
              <h1 class="display-10  fw-bolder">{data.name}</h1>
              <div class="fs-5 mb-5">
                <span class="text-decoration-line-through">$45.00</span>
                <span>${data.price}</span>
              </div>
              <p class="lead">{data.description}</p>
              <div class="d-flex">
                <input
                  class="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                  style={{ width: "3rem" }}
                />
                <Cart_Button_AddToCart productId={id}/>
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
