import React from 'react';
import { ShoppingBagOpen, ShoppingCartSimple, Pencil } from 'phosphor-react';
import { Link } from 'react-router-dom';
import User from './User';
import { useAuthContext } from './context/AuthContext';
import SignButton from './SignButton';
import HeaderIcon from './HeaderIcon';

function Header() {
  const { user, login, logout } = useAuthContext();

  const isAdmin = user?.isAdmin;

  return (
    <header className="flex justify-between items-center border-b-2 border-rose-200 p-4">
      <Link to="/" className="flex text-2xl text-rose-400 items-center gap-2">
        <ShoppingBagOpen />
        Shop
      </Link>
      <div className="flex gap-2 items-center">
        <Link to="/products">Products</Link>
        {user && <User user={user} />}
        {user && (
          <HeaderIcon to="/my-cart">
            <ShoppingCartSimple />
          </HeaderIcon>
        )}
        {isAdmin && (
          <HeaderIcon to="/products/new">
            <Pencil />
          </HeaderIcon>
        )}

        {user && <SignButton content="LogOut" onClick={logout} />}
        {!user && <SignButton content="LogIn" onClick={login} />}
      </div>
    </header>
  );
}

export default Header;
