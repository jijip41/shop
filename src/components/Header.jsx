import React, { useEffect, useState } from 'react';
import { ShoppingBagOpen, ShoppingCartSimple, Pencil } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';

function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between items-center border-b-2 border-rose-200 p-4">
      <Link to="/" className="flex text-2xl text-rose-400 items-center gap-2">
        <ShoppingBagOpen />
        Shop
      </Link>
      <div className="flex gap-2 items-center">
        <Link to="/products">Products</Link>
        {user && (
          <img
            src={user.photoURL}
            alt="user"
            className="rounded-full w-10 h-10"
          ></img>
        )}
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
        {user && (
          <button
            className="rounded-md bg-rose-200 text-gray-600 p-2"
            onClick={logout}
          >
            Logout
          </button>
        )}
        {!user && (
          <button
            className="rounded-md bg-rose-200 text-gray-600 p-2"
            onClick={login}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
