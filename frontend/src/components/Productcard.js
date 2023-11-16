import React from "react";
import { Link } from "react-router-dom";
import data from "../asset/data.json";
import axios from "axios";
import useFetch from "../hook/useFetch";



function Productcard() {
  const { loading, error, data } = useFetch(
    "http://127.0.0.1:8000/api/read/products"
  );
  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;
  return (
    <div class="row">
      {data.map((product) => (
        <div key={product.id} class="col-sm-3" >
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={product.image_url} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{product.name.substring(0, 70)}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={`details/${product.id}`} class="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productcard;
