import React from "react";
import data from "../../asset/data.json";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import'./Admin.css';
import useFetch from "../../hook/useFetch";
import Button from "react-bootstrap/Button";
import Edit from "./Edit";

function Admin() {
      const { loading, error, data } = useFetch(
        "http://127.0.0.1:8000/api/read/products/1"
      );
      if (loading) return <p>loading</p>;

      if (error) return <p>error</p>;
  return (
    <div>
      <Header></Header>
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
                <tr key={data.id}>
                  <th scope="row">
                    <a href="#">
                      <img
                        class="img-fluid"
                        style={{ width: "65px" }}
                        src={data.image_url}
                        alt=""
                      />
                    </a>
                  </th>
                  <td>
                    <Link
                      to={`/details/${data.id}`}
                      class="text-primary fw-bold"
                    >
                      {data.name.substring(0, 70)}
                    </Link>
                  </td>
                  <td>${data.price}</td>
                  <td class="fw-bold">10</td>
                  <td>
                    <Edit></Edit>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
