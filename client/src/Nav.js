import React from 'react';
import './Style.scss';

function Nav(Admin, Username) {
  if (Admin == 1)
    return (
      <nav class="Nav">
        <a>Stock Tracker</a>
        <a href="">Home</a>
        <a href="">Edit Stock</a>
        <a href="">Orders</a>
        <a href="">Add a Customer</a>
        <a href="">Log Out ({Username})</a>
      </nav>
    );
  else
    return (
      <nav class="Nav">
        <a>Stock Order</a>
        <a href="">Home</a>
        <a href="">All Products</a>
        <a href="">Cart</a>
        <a href="">My Orders</a>
        <a href="">Log Out ({Username})</a>
      </nav>
    );
}

export default Nav;
