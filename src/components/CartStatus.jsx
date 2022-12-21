import React from 'react';
import { ShoppingCartSimple } from 'phosphor-react';

import HeaderIcon from './HeaderIcon';
import useCarts from '../hooks/useCarts';

function CartStatus() {
  const {
    cartsQuery: { data: products },
  } = useCarts();

  return (
    <HeaderIcon to="/my-cart" className="">
      <div className="relative">
        <ShoppingCartSimple className="" />
        {products && (
          <span className="absolute -top-1 -right-1 flex justify-center items-center rounded-full bg-rose-500 w-3 h-3 text-2xs text-white">
            {products.length}
          </span>
        )}
      </div>
    </HeaderIcon>
  );
}

export default CartStatus;
