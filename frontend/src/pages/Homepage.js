import React from "react";
import Header from "../components/Header";
import Producttable from "../components/Producttable";
import Productcard from "../components/Productcard";
import { Outlet } from "react-router-dom";
import axios from "axios";
import './Homepage.css'
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <div
        class="bg-image">
        <img src={ 'https://www.lego.com/cdn/cs/set/assets/blt1a803a41d03d2a9b/Holiday23-GroupedAssets-202311-Hero-Standard-Large-10326.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=1.5'} />
      </div>
      <div class="container">
        <div class="col">
          <Header class="row"></Header>
          <Productcard class="row align-center"></Productcard>
        </div>
        <Pagination></Pagination>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
