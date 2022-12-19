import React from 'react';
import { ShoppingCartSimple } from 'phosphor-react';
import { useQuery } from '@tanstack/react-query';

import { getCartById } from '../api/firebase';
import HeaderIcon from './HeaderIcon';
import { useAuthContext } from '../context/AuthContext';

function CartStatus() {
  const { uid } = useAuthContext();

  const { data: carts } = useQuery(['carts'], () => getCartById(uid));

  return (
    <HeaderIcon to="/my-cart" className="">
      <div className="relative">
        <ShoppingCartSimple className="" />
        {carts && (
          <span className="absolute -top-1 -right-1 flex justify-center items-center rounded-full bg-rose-500 w-3 h-3 text-2xs text-white">
            {carts.length}
          </span>
        )}
      </div>
    </HeaderIcon>
  );
}

export default CartStatus;
