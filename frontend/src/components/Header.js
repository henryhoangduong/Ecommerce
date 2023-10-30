import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import axios from "axios";


function Header() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const nav = useNavigate();


  async function handleLogout(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/api/logout";
    try {
      const res = await axios.get(url);
      console.log(res)
      localStorage.setItem('token', '');
      setAuthUser(null)
      setIsLoggedIn(false)
      nav('/')
    } catch (error) {
      console.log(error)
    }
  }
  function handleclick() {
    nav('/')
  }
  return (
    <div>
      <header
        id="header"
        class="header fixed-top d-flex align-items-center position-fixed"
      >
        <div class="d-flex align-items-center justify-content-between">
          <a href="" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span class="d-none d-lg-block" onClick={handleclick}>LEGO</span>
          </a>
          <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>
        <div class="search-bar">
          <form
            class="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            <li class="nav-item dropdown">
              <Link
                class="nav-link nav-icon"
                to='shoppingcarts'
                data-bs-toggle="dropdown"
              >
                <i class="bi bi-cart"></i>
              </Link>
            </li>
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle ">
                <i class="bi bi-search"></i>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link nav-icon" data-bs-toggle="dropdown">
                <i class="bi bi-bell"></i>
                <span class="badge bg-primary badge-number">4</span>
              </a>
            </li>

            <li>
              {isLoggedIn ? (
                <Link to={`/`} onClick={handleLogout} class="nav-link nav-icon">
                  <span>Log out</span>
                </Link>
              ) : (
                <Login></Login>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
