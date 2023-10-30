import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import data from "../asset/data.json";
import useFetch from "../hook/useFetch";
import Header from "../components/Header";
function Shoppingcarts() {
    const { loading, error, data } = useFetch(
      "http://127.0.0.1:8000/api/read/products"
    );
    if (loading) return <p>loading</p>;

    if (error) return <p>error</p>;
  return (
    <>
      <Header></Header>
    <section class="h-100 h-custom" style={{ backgroundcolor: "#eee" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-lg-7">
                    <h5 class="mb-3">
                      <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                        shopping
                      </a>
                    </h5>
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p class="mb-1">Shopping cart</p>
                        <p class="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p class="mb-0">
                          <span class="text-muted">Sort by:</span>{" "}
                          <a href="#!" class="text-body">
                            price <i class="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    {data.map((product) => (
                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={product.image_url}
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>{product.name.substring(0, 50)}</h5>
                                <p class="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 class="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h6 class="mb-0">{product.price}</h6>
                              </div>
                              <a style={{ color: "black" }}>
                                <i class="bi bi-trash"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </>
  );
}

export default Shoppingcarts;
