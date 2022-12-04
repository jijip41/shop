import React from 'react';
import { ShoppingBagOpen, ShoppingCartSimple, Pencil } from 'phosphor-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <ShoppingBagOpen />
        Shop
      </Link>
      <div>
        <Link to="/products">Products</Link>
        <Link to="/my-cart">
          <ShoppingCartSimple />
        </Link>
        <Link to="products/new">
          <Pencil />
        </Link>
        <span>User Img</span>
        <span>UserName</span>
        <button>Login/Logout</button>
      </div>
    </header>
  );
}

export default Header;
