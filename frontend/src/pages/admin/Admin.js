import data from "D:/USER/React project/register-login/src/asset/data.json";
import RevenueCard from "../../components/RevenueCard";
import Pagination from "../../components/Pagination";
import Salescard from "../../components/Salescard";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Button from "react-bootstrap/Button";
import useFetch from "../../hook/useFetch";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import Customercard from '../../components/Customercard'


import'./Admin.css';
function Admin() {
      const { loading, error, data } = useFetch(
        "http://127.0.0.1:8000/api/read/products/pagination?page=1"
      );
  useEffect(() => {
          console.log(data)
        },[data])
      if (loading) return <p>loading</p>;

      if (error) return <p>error</p>;
  return (
    <div>
      <Header></Header>
      <div id='card'>
        <Salescard></Salescard>
        <RevenueCard></RevenueCard>
        <Customercard></Customercard>
      </div>
      
      <Sidebar></Sidebar>
      <div class="col-9" id="Producttable">
        <div class="card top-selling overflow-auto">
          <div class="card-body pb-0">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">
                      <a href="#">
                        <img
                          class="img-fluid"
                          style={{ width: "65px" }}
                          src={product.image_url}
                          alt=""
                        />
                      </a>
                    </th>
                    <td>
                      <Link
                        to={`/details/${product.id}`}
                        class="text-primary fw-bold"
                      >
                        {product.name.substring(0, 70)}
                      </Link>
                    </td>
                    <td>${product.price}</td>
                    <td class="fw-bold">10</td>
                    <td>
                      <Edit></Edit>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination></Pagination>
    </div>
  );
}

export default Admin;
