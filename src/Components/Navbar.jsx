import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
export const Navbar = () => {
  const state=useSelector((state)=>state.handleCart)
  return (
    
    <div class="navy">
         <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
  <div class="container">
    <a class="navbar-brand" href="#">E-Shop</a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="hello">
        <li class="nav-item">
          <Link to="/">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/products">
          <a class="nav-link" href="#">Products</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/about">
          <a class="nav-link" href="#">About</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/contact">
          <a class="nav-link" href="#">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="buttons">
        {/*<Link to="./login">
        <a href="" className="btn btn-outline-dark">
         <i className="fa fa-sign-in me-1"></i> Login
        </a>
        </Link>
        <Link to="./register">
        <a href="" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i>Register
        </a>
        </Link>
         */}
        <Link to="./cart">
        <a href="" className="btn btn-outline-dark ms-2">
        <i className="fa fa-shopping-cart me-1"></i>Cart(
          {
          state.length
        })
        </a>
        </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
    
  );
}
