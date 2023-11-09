import React from "react";
import Header from "../components/Header";
import Producttable from "../components/Producttable";
import Productcard from "../components/Productcard";
import { Outlet } from "react-router-dom";
import axios from "axios";
import './Homepage.css'
import Pagination from "../components/Pagination";

function Homepage() {
  
  return (
    <>
      <div
        class="bg-image">
        
      </div>
      <div class="container">
        <div class="col">
          <Header class="row"></Header>
          <span>.</span>
          <br />
          <span>.</span>
          <br />
          <span>.</span>
          <Productcard class="row align-center"></Productcard>
        </div>
        <Pagination></Pagination>
      </div>
    </>
  );
}

export default Homepage;
