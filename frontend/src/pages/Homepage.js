import React from "react";
import Header from "../components/Header";
import Producttable from "../components/Producttable";
import Productcard from "../components/Productcard";
import { Outlet } from "react-router-dom";
import axios from "axios";


function Homepage() {
  
  return (
    <div class="container">
      <div class="col">
        <Header class="row"></Header>
        <h1>hello Thanh chinh dau tien</h1>
        <span>.</span>
        <br />
        <span>.</span>
        <br />
        <span>.</span>
        <Productcard class="row align-center"></Productcard>
      </div>
    </div>
  );
}

export default Homepage;
