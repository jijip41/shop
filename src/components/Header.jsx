import React from 'react';
import { ShoppingBagOpen, ShoppingCartSimple, Pencil } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        <ShoppingBagOpen />
        <p>Shop</p>
      </div>
      <div>
        <span onClick={() => navigate('/products')}>Products</span>
        <ShoppingCartSimple
          onClick={() => {
            navigate('/my-cart');
          }}
        />
        <Pencil onClick={() => navigate('products/new')} />
        <span>User Img</span>
        <span>UserName</span>
        <button>Login/Logout</button>
      </div>
    </header>
  );
}

export default Header;
