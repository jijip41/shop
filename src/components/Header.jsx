import React from 'react';
import { ShoppingBagOpen, ShoppingCartSimple, Pencil } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { login } from '../api/firebase';

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 border-rose-200 p-4">
      <Link to="/" className="flex text-2xl text-rose-400 items-center gap-2">
        <ShoppingBagOpen />
        Shop
      </Link>
      <div className="flex gap-2 items-center">
        <Link to="/products">Products</Link>
        <Link
          to="/my-cart"
          className="rounded-full border-2 border-rose-200 text-gray-600 p-2 hover:bg-rose-50 hover:text-gray-800"
        >
          <ShoppingCartSimple />
        </Link>
        <Link
          to="products/new"
          className="rounded-full border-2 border-rose-200 text-gray-600 p-2 hover:bg-rose-50 hover:text-gray-800"
        >
          <Pencil />
        </Link>
        <button
          className="rounded-md bg-rose-200 text-gray-600 p-2"
          onClick={login}
        >
          Login/Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
